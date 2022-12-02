const Joi = require('joi');

const id_libros = Joi.number().integer();
const titulo = Joi.string().min(5).max(15);
const anio = Joi.number().integer().min(4);
const paginas = Joi.number().integer().min(3);
const status = Joi.string().min(3).max(12);
const autor_id = Joi.number().integer();
const editorial_id = Joi.number().integer();

const createLibroSchema = Joi.object({
    titulo: titulo.required(),
    anio: anio.required(),
    paginas: paginas.required(),
    status: status.required(),
    autor_id: autor_id.required(),
    editorial_id: editorial_id.required(),
});

const updateLibroSchema = Joi.object({
    titulo: titulo,
    anio: anio,
    paginas: paginas,
    status: status,
    autor_id: autor_id,
    editorial_id: editorial_id,
});

const getLibroSchema = Joi.object({
    id_libros: id_libros.required(),
});

module.exports= {
    createLibroSchema,
    updateLibroSchema,
    getLibroSchema,
}