const Joi = require('joi');

const id_autores = Joi.number().integer();;
const nombre = Joi.string().min(4).max(12);
const edad = Joi.number().integer();
const nacionalidad = Joi.string();

const createAutorSchema = Joi.object({
    nombre: nombre.required(),
    edad: edad.required(),
    nacionalidad: nacionalidad.required(),
});

const updateAutorSchema = Joi.object({
    nombre: nombre,
    edad: edad,
    nacionalidad: nacionalidad,

});

const getAutorSchema = Joi.object({
    id_autores: id_autores.required(),

});

module.exports={
    createAutorSchema,
    updateAutorSchema,
    getAutorSchema,
}