// index.js
const express = require('express');
const app = express();
const port = 3000;
connection = require('./db')

// const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
// Importa otros controladores según sea necesario

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

app.use(productController)

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
