
const  express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')
const mongoose = require('mongoose');
//the Collection of the products in the db
const Users = require('./models/User');

//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())

//connect to the DB
const db = mongoose.connect('mongodb://localhost:27017/webShopDb', { useNewUrlParser: true })
    .then(() => { console.log('connected to mongodb')}
    ).catch(err => { console.log(err)});

// app.post('/api/users', async (req,res)=>{
//
//
//
// }


app.get('/api/users', async (req,res)=>{
    const products = await  Users.find({})
    if(products){
        res.status(200).json(products)
    } else {
        res.status(500);
        throw new Error("products not found")
    }
})

app.listen(4000, () => {
        console.log('listening on port 4000');
    }
);
