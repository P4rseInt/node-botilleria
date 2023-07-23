const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        await userService.register(username, password);
        res.status(201).json({message: 'Usuario creado exitosamente'});
    } catch (error) {
        res.status(500).json({message: 'Error al crear el usuario'});
    }
});

router.post('/login', async (req, res) => {
    console.log('BODY', req.body)
    const {username, password} = req.body;
    try {
        const token = await userService.login(username, password);
        res.status(200).json({token});
    } catch (error) {
        console.log('ERROR', error)
        res.status(401).json({message: 'Credenciales inválidas'});
    }
});

module.exports = router;
