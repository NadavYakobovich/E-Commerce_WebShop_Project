
const mongoose = require('mongoose');
//the Collection of the products in the db
const Product = require('../models/Product');


exports.getProducts =  async (req,res)=>{
    const products = await  Product.find({})
    if(products){
        res.status(200).json(products)
    } else {
        res.status(500);
        throw new Error("products not found")
    }
}



