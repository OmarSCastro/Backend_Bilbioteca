const Joi = require('joi');

const id_usuario_libro = Joi.number().integer();
const id_libros= Joi.number().integer();
const id_usuarios= Joi.number().integer();
// const id_libros= Joi.string().uuid();
// const id_usuarios= Joi.string().uuid();

const createUsuarioLibroSchema = Joi.object({
    id_libros: id_libros.required(),
    id_usuarios: id_usuarios.required()
});


const deleteUsuarioLibroSchema = Joi.object({
    id_usuario_libro: id_usuario_libro.required()
});

const getUsuarioLibroSchema = Joi.object({
    id_usuario_libro: id_usuario_libro.required()
});

module.exports = {
    createUsuarioLibroSchema,
    deleteUsuarioLibroSchema,
    getUsuarioLibroSchema
}