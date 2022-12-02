const Joi = require('joi');

const id_usuarios = Joi.number().integer();
const nombre = Joi.string.min(3);
const apellido =  Joi.string().min(5);
const edad = Joi.number().integer().min(1).max(2);
const telefono = Joi.number.integer().min(8).max(10);

const createUsuarioSchema = Joi.object({
    nombre: nombre.required(),
    apellido: apellido.required(),
    edad: edad.required(),
    telefono: telefono.require(),
});

const updateUsuarioSchema = Joi.object({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    telefono: telefono,
});

const deleteUsuarioSchema = Joi.object({
    id_usuarios: id_usuarios.required(),
});

mmodule.exports= {
    createUsuarioSchema,
    updateUsuarioSchema,
    deleteUsuarioSchema
}