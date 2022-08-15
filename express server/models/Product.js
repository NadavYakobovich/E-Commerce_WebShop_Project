const mongoose = require('mongoose');
const Scheme = new mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    price: Number,
    pic: String
});

module.exports= mongoose.model('Product', Scheme);