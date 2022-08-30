const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');


const userList = [
    {
        userName:"Nadav",
        email: "123@123",
        password:"1234",
        cart: []
    }]


const db = mongoose.connect('mongodb://localhost:27017/webShopDb', { useNewUrlParser: true })
    .then(() => { console.log('connected to mongodb')}
    ).catch(err => { console.log(err)});



User.insertMany(userList).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})



