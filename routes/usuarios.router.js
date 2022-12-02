const express = require('express'); //Requerimos a express
const UsuariosService = require('../services/usuarios.service');
const router = express.Router();  //Gracias a express podemos crear una aplicacion

const service = new UsuariosService();

router.get('/', async( req, res ) => {
    const usuarios = await service.find();
    res.status(200).json( usuarios )
});

router.get('/:id', async( req, res, next ) => {

    try {
        const {id} = req.params;
        const usuario = await service.findOne(id);
        res.status(200).json( usuario );

    } catch (error) {
        next(error);        
    }

});

router.patch('/:id', async( req, res, next ) => {

    try {
        const {id} = req.params;
        const body = req.body;
        const updateUsuario = await service.update(id, body);
        res.status(200).json(updateUsuario);

    } catch (error) {
        next(error);        
    }
});

router.post('/', async( req, res ) => {
    const body = req.body;
    const newUsuario = await service.create(body);
    res.status(200).json(newUsuario)
});

router.delete('/:id', async( req, res ) => {
    const {id} = req.params;
    const deletedUsuario = await service.delete(id);
    res.status(200).json({
        message: 'Usuario elinminado',
        id
    })
});

module.exports = router