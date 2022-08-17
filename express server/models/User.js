const mongoose = require('mongoose');
const Scheme = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    cart: [{
        productId: String,
        quantity: Number
    }],
});

module.exports= mongoose.model('User', Scheme);