const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1999',
    database: 'botilleria',
});

// Establecer conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = connection;
