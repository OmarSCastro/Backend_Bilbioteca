const express = require('express'); //Requerimos a express
const AutoresService = require('../services/autores.service');
const router = express.Router();  //Gracias a express podemos crear una aplicacion

const service = new AutoresService();

router.get('/', async( req, res ) => {
    const autores = await service.find();
    res.status(200).json(autores);
});

router.get('/:id', async( req, res, next ) => {

    try {
        
        const {id} = req.params;
        const autor = await service.findOne(id);
        res.status(200).json(autor);

    } catch (error) {
        next(error);
    }

});

router.patch('/:id', async( req, res, next ) => {

    try {
        
            const {id} = req.params;
            const body = req.body;
            const updateAutor = await service.update(id, body);
            res.status(200).json(updateAutor);
        
    } catch (error) {
        next(error);
    }
});

router.post('/', async( req, res ) => {
    const body = req.body;
    const newAutor = await service.create(body);
    res.status(200).json(newAutor)
});

router.delete('/:id', async( req, res ) => {
    const {id} = req.params;
    const deletedAutor = await service.delete(id)
    res.status(200).json({
        message: 'Autor eliminado',
        id
    })
});

module.exports = router;