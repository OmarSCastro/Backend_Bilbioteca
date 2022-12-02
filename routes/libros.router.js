const express = require('express'); //Requerimos a express

const validatorHandler = require('../middlewares/validatorHandler');
const { createLibroSchema, updateLibroSchema, getLibroSchema } = require('../schemas/libros.schema');
const LibrosService = require('../services/libros.service');

const router = express.Router();  //Gracias a express podemos crear una aplicacion
const service = new LibrosService();

router.get('/', async( req, res ) => {
    const libros = await service.find();
    res.status(200).json(libros);
});
router.get('/:id_libros',
    validatorHandler(getLibroSchema,'params' ), 
    async( req, res, next ) => {
        try {
            const {id_libros} = req.params;
            const libro = await service.findOne(id_libros);
            res.status(200).json(libro);

        } catch (error) {

            next(error);
        }   
});

router.patch('/:id', 
    validatorHandler(getLibroSchema,'params' ), 
    validatorHandler(updateLibroSchema,'body' ),
    async( req, res, next ) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const libro = await service.update(id, body)
            res.status(200).json(libro);
        } catch (error) {
            next(error)
        }
});

router.post('/', 
    validatorHandler(createLibroSchema,'body' ),
    async( req, res ) => {
        const body = req.body;
        const newLibro = await service.create(body);
        res.status(200).json(newLibro);

});

router.delete('/:id', async( req, res ) => {
    const {id} = req.params;
    await service.delete(id)
    res.status(200).json({
        message: 'Libro eliminado',
        id
    })
});


module.exports = router;