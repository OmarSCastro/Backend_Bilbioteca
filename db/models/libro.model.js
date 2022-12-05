const {Model, DataTypes, Sequelize}= require('sequelize');
const { EDITORIAL_TABLE } = require('./editorial.model');

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
        type: DataTypes.INTEGER,
        references: {
            model: EDITORIAL_TABLE,
            key: 'id_editoriales'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Libro extends Model {
    static associate(models){
        this.belongsTo(models.Editorial, {
            as: 'editorial'
        });

        this.belongsTo(models.Autor, {
            as: 'autores'
        });

        this.belongsTo(models.UsuarioLibro, {
            as: 'usuariolibro'
        });

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