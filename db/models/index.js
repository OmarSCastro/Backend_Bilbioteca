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

    
    UsuarioLibro.associate(sequelize.models);
    Usuario.associate(sequelize.models);
    Editorial.associate(sequelize.models);
    Libro.associate(sequelize.models);
    Autor.associate(sequelize.models)
}

module.exports = setupModels;