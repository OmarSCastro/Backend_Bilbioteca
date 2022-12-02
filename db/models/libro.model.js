const {Model, DataTypes, Sequelize}= require('sequelize');

const LIBRO_TABLE = 'libros';

const LibroSchema = {
    id_libros: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    titulo: {
        allowNull: false,
        type: DataTypes.STRING
    },
    anio: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    paginas: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING
    },
    autor_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'autor_id'
    },
    editorial_id: {
        field: 'editorial_id',
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

class Libro extends Model {
    static associate(models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: LIBRO_TABLE,
            modelName: 'Libro',
            timestamp: false
        }
    }
}

module.exports = {
    LIBRO_TABLE,
    LibroSchema,
    Libro
}