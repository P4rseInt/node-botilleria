const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
router.get('/products', (req, res) => {
    productService.getAllProducts((err, products) => {
        if (err) {
            console.error('Error al obtener los productos: ', err);
            res.status(500).json({error: 'Ocurrió un error al obtener los productos'});
        } else {
            // Respuesta exitosa con los productos obtenidos de la base de datos
            console.log(products)
            res.json(products);
        }
    })
});

router.post('/products', (req, res) => {
    const newProduct = req.body;
    const product = productService.createProduct(newProduct);
    res.json(product);
});

module.exports = router;
