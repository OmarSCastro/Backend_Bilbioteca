const express = require('express'); //Requerimos a express

const validatorHandler = require('../middlewares/validatorHandler');
const { createUsuarioLibroSchema, deleteUsuarioLibroSchema, getUsuarioLibroSchema } = require('../schemas/usuarios_libros.schema');
const UsuariosLibros = require('../services/usuarios_libros.service');

const router = express.Router();
const service = new UsuariosLibros();

router.get('/', async( req, res )=> {
    const usuario_libro = await service.find();
    res.status(200).json(usuario_libro);
});
router.get('/:id_usuario_libro', 
    validatorHandler(getUsuarioLibroSchema),
    async( req, res, next )=> {
        try {
            const {id_usuario_libro} = req.params;
            const usuario_libro = await service.findOne(id_usuario_libro);
            res.status(200).json(usuario_libro)
        } catch (error) {
            next( error );        
        }
    }
);
router.post('/', 
    validatorHandler(createUsuarioLibroSchema,'body'),
    async( req, res )=> {
        const body = req.body;
        const newUsuarioLibro = await service.create(body);
        res.status(200).json(newUsuarioLibro);
});

router.delete('/:id', async( req, res )=> {
    const {id} = req.params;
    await service.delete(id);
    res.status(200).json({
        message: 'Relación eliminada',
        id
    })
});

module.exports = router;