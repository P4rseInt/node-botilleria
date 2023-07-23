const connection = require('../db'); // Importa la conexión desde un archivo separado (por ejemplo, db.js)

function getAllProducts(callback) {
    const sql = 'SELECT * FROM products';

    connection.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

function createProduct(newProduct) {
    const products = {...newProduct, id: products.length + 1};
    products.push(products);
    return products;
}

module.exports = {
    getAllProducts,
    createProduct,
};
