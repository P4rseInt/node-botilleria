const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// Ruta para obtener todos los usuarios
router.get('/products', (req, res) => {
    productService.getAllProducts((err, products) => {
        if (err) {
            console.error('Error al obtener los productos: ', err);
            res.status(500).json({error: 'Ocurrió un error al obtener los productos'});
        } else {
            // Respuesta exitosa con los productos obtenidos de la base de datos
            res.json(products);
        }
    })
});

// Ruta para crear un nuevo usuario
router.post('/products', (req, res) => {
    const newProduct = req.body;
    const product = productService.createProduct(newProduct);
    res.json(product);
});

module.exports = router;
