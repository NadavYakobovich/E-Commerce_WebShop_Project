const mongoose = require('mongoose');
//the Collection of the products in the db
const Users = require('../models/User');
const Product = require("../models/Product");


//get user by id from the server
exports.getUserList = async (req, res) => {
    const user = await Users.findById(req.query.Id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(500);
        throw new Error("user not found")
    }
}

//todo change the email,pass,name to be in the body of the request
//add new user to the server
exports.addUser = async (req, res) => {
    const userInput = {userName: req.query.name, email: req.query.email, password: req.query.password};
    const user = await Users.create(userInput)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(500);
        throw new Error("user not found")
    }
}


// TODO change the get to post request for the user login
// get the user from the server by mail and password
exports.getUser = async (req, res) => {
    const user = await Users.findOne({email: req.query.email, password: req.query.password})
    res.status(200).json(user)
}

//the function get list of id of products in the cart by the user id and return the list of products
async function getCartProducts(userCart) {
    let products = []
    for (let i = 0; i < userCart.length; i++) {
        let product = await Product.findById(userCart[i].productId).lean().exec()
        product.quantity = userCart[i].quantity
        products.push(product)
    }
    return products
}

//get id of the user and return the cart of hem
exports.getCart = async (req, res) => {
    const user = await Users.findById(req.query.id).lean()
    if (user) {
        res.status(200).json(await getCartProducts(user.cart))
    } else {
        res.status(500);
        throw new Error("user not found")
    }
}


//add the product to the user cart by the user id and the product id
exports.addProductToCart = async (req, res) => {
    const product = await Product.findById(req.body.data.productId)
    const user = await Users.findById(req.body.data.userId)
    if (product) {
        user.cart.push({productId: req.body.data.productId, quantity: 1})
        await user.save()
        res.status(200).json(product)
    } else {
        res.status(500);
        throw new Error("product not found")
    }
}


    exports.removeProductFromCart = async (req, res) => {
        const user = await Users.findById(req.body.data.userId)
        if (user) {
            user.cart = user.cart.filter(product => product.productId !== req.body.data.productId)
            await user.save()
            res.status(200).json()
        } else {
            res.status(500);
            throw new Error("user not found")
        }
    }

    //get  all the cart of the users from the server
    exports.getUsersCart = async (req, res) => {
        const carts = await Users.find({}).select('userName cart').lean()
        if (carts) {
            for (let index in  carts) {
                carts[index].cart = await getCartProducts(carts[index].cart)
            }
            res.status(200).json(carts)
        }
        else {
            res.status(500);
            throw new Error("carts not found")
        }
    }



