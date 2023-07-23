// index.js
const express = require('express');
const app = express();
const port = 3000;
connection = require('./db')
const cors = require('cors');
const bodyParser = require('body-parser');

// Configurar el middleware para analizar los datos enviados en las solicitudes
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionSuccessStatus: 200
}

// Middleware de CORS
app.use(cors(corsOptions));

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

app.use(productController)
app.use(userController)

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
