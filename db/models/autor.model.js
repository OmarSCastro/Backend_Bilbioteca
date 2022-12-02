const {Model, DataTypes, Sequelize}= require('sequelize');

const AUTOR_TABLE= 'autores';

const AutorSchema = {
    id_autores: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    edad: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nacionalidad: {
        allowNull: false,
        type: DataTypes.STRING
    }
};

class Autor extends Model {

    static associate(models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: AUTOR_TABLE,
            modelName: 'Autor',
            timestamp: false
        }
    }

}

module.exports= {
    AUTOR_TABLE,
    AutorSchema,
    Autor
}