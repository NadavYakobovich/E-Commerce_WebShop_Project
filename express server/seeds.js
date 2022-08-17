const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');

//the list of products that will be used in the DB file for initializing the DB
const productsList =  [
    {
        "id": 1,
        "name": "imac",
        "pic": "../dataPic/appledesktop.jpeg",
        "category": "computer",
        "price": "100",
        "brand": "apple"
    },
    {
        "id": 2,
        "name": "dell desktop",
        "pic": "../dataPic/dell desktop.webp",
        "category": "desktop computer",
        "price": "200",
        "brand": "dell"
    },
    {
        "id": 3,
        "name": "hp desktop",
        "pic": "../dataPic/desktop1.webp",
        "category": "desktop computer",
        "price": "300",
        "brand": "hp"
    },
    {
        "id": 4,
        "name": "external speaker",
        "pic": "../dataPic/external speaker 1.webp",
        "category": "speaker",
        "price": "400",
        "brand": "lg"
    },
    {
        "id": 5,
        "name": "external speaker",
        "pic": "../dataPic/external speakers 2.png",
        "category": "External Speakers",
        "price": "450",
        "brand": "jet"
    },
    {
        "id": 6,
        "name": "hp laptop",
        "pic": "../dataPic/hplaptop.jpeg",
        "category": "laptop",
        "price": "500",
        "brand": "hp"
    },
    {
        "id": 7,
        "name": "dell laptop",
        "pic": "../dataPic/laptop1.jpg",
        "category": "laptop",
        "price": "600",
        "brand": "dell"
    },

    {
        "id": 8,
        "name": "laptop mic",
        "pic": "../dataPic/mic external 1.jpg",
        "category": "mic",
        "price": "700",
        "brand": "LG"
    }
]

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

Product.insertMany(productsList).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

User.insertMany(userList).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})



