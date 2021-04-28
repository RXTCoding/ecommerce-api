const express = require('express');
const products= require('../products.json');
const getProducts= require('./getProducts');
const getProduct= require('./getProduct');

const app = express() //express invoked creates our express app

app.use(express.json())

app.get('/api/products', getProducts)

app.get('/api/products', (req, res)=>{
    res.status(200).send(products)
})
app.get('/api/products/:id', getProduct);

const port= 4040;

app.listen(port, () => console.log(`Server running on ${port}`))