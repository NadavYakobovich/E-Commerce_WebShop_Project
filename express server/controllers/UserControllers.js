
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
function getCartProducts(userCart){
    let products = []
    for(let i = 0; i < userCart.length; i++){
        products.push(products.findById(userCart[i].productId))
    }
    return products
}

exports.getCart = async (req,res)=>{
    const user = await Users.findById(req.query.id)
    if(user){
        res.status(200).json(getCartProducts(user.cart))
    } else {
        res.status(500);
        throw new Error("user not found")
    }
}


//add the product to the user cart by the user id and the product id
exports.addProductToCart = async (req,res)=>{
    const product = await Product.findById(req.body.productId)
    const user = await Users.findById(req.body.userId)
    if(product){
        user.cart.push({productId: req.body.productId, quantity: req.body.quantity})
        await user.save()
        res.status(200).json(product)
    } else {
        res.status(500);
        throw new Error("product not found")
    }
}

