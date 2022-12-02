'use strict';

const { AUTOR_TABLE, AutorSchema } = require('../models/autor.model');
const { EDITORIAL_TABLE, EditorialSchema } = require('../models/editorial.model');
const { LIBRO_TABLE, LibroSchema } = require('../models/libro.model');
const { USUARIO_TABLE, UsuarioSchema } = require('../models/usuario.model');
const { USUARIOLIBROS_TABLE, UsuariosLibrosSchema } = require('../models/usuarios_libros.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(AUTOR_TABLE, AutorSchema);
    await queryInterface.createTable(EDITORIAL_TABLE, EditorialSchema);
    await queryInterface.createTable(LIBRO_TABLE, LibroSchema);
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
    await queryInterface.createTable(USUARIOLIBROS_TABLE, UsuariosLibrosSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(AUTOR_TABLE);
    await queryInterface.dropTable(EDITORIAL_TABLE);
    await queryInterface.dropTable(LIBRO_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(USUARIOLIBROS_TABLE);
  }
};
