const express = require('express')
const router = express.Router()
const path = require('path')

const products = []

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'products.html'), { products });
});

router.post('/', (req, res) => {
    products.push(req.body.product)
    res.redirect('/products')
});

module.exports = router;