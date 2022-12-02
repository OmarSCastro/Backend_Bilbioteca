const {Model, DataTypes, Sequelize}= require('sequelize');
const { LIBRO_TABLE } = require('./libro.model');
const { USUARIO_TABLE } = require('./usuario.model');

const USUARIOLIBROS_TABLE = 'usuarios_libros';

const UsuariosLibrosSchema = {

    id_usuario_libro:{
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_usuario_libro',
        type:DataTypes.INTEGER 
    },
    
    id_libros:{
        allowNull: false,
        field: 'id_libros',
        type:DataTypes.INTEGER,
        references: {
            model: LIBRO_TABLE,
            key: 'id_libros'
        },
        onUpdate: 'CASCADE', // Esto ocurre al actualizar, un efecto en cascada y tambien se actualiza
        onDelete: 'SET NULL' // Esto ocurre al borrar, se establece a null
    },
    
    id_usuarios:{
        allowNull: false,
        field: 'id_usuarios',
        type:DataTypes.INTEGER,
        references: {
            model: USUARIO_TABLE,
            key: 'id_usuarios'
        },
        onUpdate: 'CASCADE', // Esto ocurre al actualizar, un efecto en cascada y tambien se actualiza
        onDelete: 'SET NULL' // Esto ocurre al borrar, se establece a null
    },
};

class UsuarioLibro extends model{

    static associate(models){

        this.belongsTo(models.Usuario,
            {
                as:'usuario'
            })

    };

    static config(sequelize){
        return{
            sequelize,
            tableName: USUARIOLIBROS_TABLE,
            modelName: 'UsuarioLibro',
            timestamp: false
        }
    };
};

module.exports={
    USUARIOLIBROS_TABLE,
    UsuariosLibrosSchema,
    UsuarioLibro
}