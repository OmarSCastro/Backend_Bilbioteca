const {Model, DataTypes, Sequelize}= require('sequelize');


const EDITORIAL_TABLE = 'editoriales';

const EditorialSchema = {
    id_editoriales: {
        field: 'id_editoriales',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre :{
        allowNull: false,
        type: DataTypes.STRING
    },
    residencia: {
        allowNull: false,
        type: DataTypes.STRING
    },
    telefono: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
};

class Editorial extends Model {

    static associate(models){
        this.hasMany(models.Libro, {
            as: 'libros',
            foreignKey: 'editorial_id'
        })
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: EDITORIAL_TABLE,
            modelName: 'Editorial',
            timestamp: false
        }
    }
};

module.exports={
    EDITORIAL_TABLE,
    EditorialSchema,
    Editorial
}