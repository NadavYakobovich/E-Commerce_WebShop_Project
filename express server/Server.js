const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')
const mongoose = require('mongoose');

const userController = require('./controllers/UserControllers');
const productController = require('./controllers/ProductControllers');
const Users = require("./models/User");
const Product = require("./models/Product");


//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())

//connect to the DB
const db = mongoose.connect('mongodb://localhost:27017/webShopDb', {useNewUrlParser: true})
    .then(() => {
            console.log('connected to mongodb')
        }
    ).catch(err => {
        console.log(err)
    });

//the user api Functions

//get user by id from the server
app.get('/api/users/:Id', userController.getUserList)

//todo change the email,pass,name to be in the body of the request
//add new user to the server
app.post('/api/users/new',userController.addUser)


// TODO change the get to post request for the user login
// get the user from the server by mail and password
app.get('/api/users', userController.getUser)

//the Product api Functions
app.get('/api/products', productController.getProducts)

//add new product to the user cart
app.post('/api/user/cart/add', userController.addProductToCart)

//get the user cart from the server
app.get('/api/user/cart', userController.getCart)

app.listen(4000, () => {
        console.log('listening on port 4000');
    }
);
