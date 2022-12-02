const { Autor, AutorSchema } = require("./autor.model");
const { Editorial, EditorialSchema } = require("./editorial.model");
const { Libro, LibroSchema } = require("./libro.model");
const { Usuario, UsuarioSchema } = require("./usuario.model");
const { UsuarioLibro, UsuariosLibrosSchema } = require("./usuarios_libros.model");

function setupModels( sequelize ){
    Autor.init(AutorSchema, Autor.config(sequelize));
    Editorial.init(EditorialSchema, Editorial.config(sequelize));
    Libro.init(LibroSchema, Libro.config(sequelize));
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    UsuarioLibro.init(UsuariosLibrosSchema, UsuarioLibro.config(sequelize));

    

}

module.exports = setupModels;