const mongoose = require('mongoose');
//the Collection of the products in the db
const Product = require('../models/Product');
const Users = require("../models/User");

//get all the products from the server
exports.getProducts = async (req, res) => {
    const products = await Product.find({})
    if (products) {
        res.status(200).json(products)
    } else {
        res.status(500);
        throw new Error("products not found")
    }
}

//update a product
//add the product to the user cart by the user id and the product id
exports.update = async (req, res) => {
    const filter = {_id: req.body.data.productId}
    const update  = {
        name: req.body.data.name,
        price: req.body.data.price,
        brand: req.body.data.brand,
        category: req.body.data.category
    }
    let doc = await Product.findOneAndUpdate(filter,update)
    if(doc != null){
        res.status(200)
    }else {
        res.status(500)
        throw new Error("Fail to update the products")
    }
}



