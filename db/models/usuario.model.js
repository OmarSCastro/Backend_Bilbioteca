const {Model, DataTypes, Sequelize}= require('sequelize');

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {

    id_usuarios: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_usuarios',
        type: DataTypes.INTEGER
    },

    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },

    apellido: {
        allowNull: false,
        type: DataTypes.STRING
    },

    edad: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

    telefono: {
        allowNull: false,
        type: DataTypes.INTEGER
    },

}

class Usuario extends Model {

    static associate(models){
        this.hasOne(models.UsuarioLibro, {
            as: 'usuario_usuarioLibro',
            foreignKey: 'id_usuarios'
        })
    };

    static config(sequelize){
        return{
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            timestamp: false
        }
    }
}

module.exports= {
    USUARIO_TABLE,
    UsuarioSchema,
    Usuario
}