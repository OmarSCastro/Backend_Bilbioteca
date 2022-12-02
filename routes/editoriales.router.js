const express = require('express'); //Requerimos a express
const EditorialesService = require('../services/editoriales.service');
const router = express.Router();  //Gracias a express podemos crear una aplicacion

const service = new EditorialesService();

router.get('/', async( req, res ) => {
    const editoriales = await service.find()
    res.status(200).json(editoriales)
});


router.get('/:id', async( req, res, next ) => {

    try {
        
        const {id} = req.params;
        const editorial = await service.findOne(id)
        res.status(200).json(editorial)

    } catch (error) {
        next(error);
    }

});

router.patch('/:id', async( req, res, next ) => {

    try {
        
        const {id} = req.params;
        const body = req.body;
        const updateEditorial = await service.update(id, body)
        res.status(200).json(updateEditorial)

    } catch (error) {
        next(error);
    }

});

router.post('/', async( req, res ) => {
    const body = req.body;
    const newEditorial = await service.create(body);
    res.status(200).json({
        newEditorial
    })
});

router.delete('/:id', async( req, res ) => {

    try {
        
        const {id} = req.params;
        const deletedEditorial = await service.delete(id)
        res.status(200).json({
            message: 'Editorial eliminada',
            id
        });

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

});

module.exports = router;