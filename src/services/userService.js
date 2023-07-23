const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../db');


async function register(username, password) {
    // Verificar si el usuario ya existe en la base de datos
    const [existingUser] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser.length > 0) {
        throw new Error('El nombre de usuario ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
}

async function login(username, password) {

    const users = await connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

    if (!users) {
        throw new Error('Credenciales inválidas');
    }
    console.log('USERS', users)

    // const isMatch = await bcrypt.compare(password, users.password);
    // if (!isMatch) {
    //     throw new Error('Credenciales inválidas');
    // }

    return jwt.sign({username: users.username}, 'secret', {expiresIn: '1h'});
}


module.exports = {
    register,
    login,
};
