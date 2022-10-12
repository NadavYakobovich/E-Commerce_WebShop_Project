const mongoose = require('mongoose');
//the Collection of the products in the db
const Product = require('../models/Product');
const Users = require("../models/User");
const multer = require("multer");
const fs = require('fs')



// the pic of the product will be saved in the server in the storage folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // the pic will be saved in the storage folder
        cb(null, 'public/dataPic')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({storage}).single('file');

//upload a pic to the server
exports.uploadPicture = async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        console.log(req.file)
        return res.status(200).send(req.files)
    })
}


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
    const update = {
        name: req.body.data.name,
        price: req.body.data.price,
        brand: req.body.data.brand,
        category: req.body.data.category,
        pic: req.body.data.pic
    }
    let doc = await Product.findOneAndUpdate(filter, update)
    if (doc != null) {
        res.status(200)
    } else {
        res.status(500)
        throw new Error("Fail to update the products")
    }
}

//add a new product to the server
exports.addProduct = async (req, res) => {
    const product = new Product({
        name: req.body.data.name,
        price: req.body.data.price,
        brand: req.body.data.brand,
        category: req.body.data.category,
        pic: req.body.data.pic
    })
    const newProduct = await product.save();
    if (newProduct) {
        res.status(200).json(newProduct)
    } else {
        res.status(500)
        throw new Error("Fail to add the product")
    }

}
 //delete a product from the server
exports.deleteProduct = async (req, res) => {
    const product = await Product.findById(req.body.productId)
    if (product) {
        //remove for the database
        await product.remove()
        //remove the pic from the server (in the folder public/dataPic/)
        fs.unlinkSync('public/dataPic/' + product.pic)
        res.status(200).json({message: "Product removed"})
    } else {
        res.status(500)
        throw new Error("Product not found")
    }


}



