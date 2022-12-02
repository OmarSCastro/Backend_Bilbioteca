const Joi = require('joi');

const id_editoriales = Joi.number().integer();
const nombre = Joi.string().min(3);
const residencia = Joi.string().min(4).max(15);
const telefono = Joi.number().integer().min(10).max(11);

const createEditorialSchema= Joi.object({
    nombre: nombre.required(),
    residencia: residencia.required(),
    telefono: telefono.required()
});

const updateEditorialSchema= Joi.object({
    nombre: nombre,
    residencia: residencia,
    telefono: telefono,
});

const getEditorialSchema= Joi.object({
    id_editoriales: id_editoriales.required(),
});

module.exports = {
    createEditorialSchema,
    updateEditorialSchema,
    getEditorialSchema,
}