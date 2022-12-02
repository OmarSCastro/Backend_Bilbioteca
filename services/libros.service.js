
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class LibrosService {

    constructor(){}
    
    async create(data){
        const newLibro = await models.Libro.create(data);
        return newLibro;
    };

    async find(){
        const rta = await models.Libro.findAll();
        return rta;
    };

    async findOne(id_libros){
        const res = await models.Libro.findByPk(id_libros);
        if (!res) {
           boom.notFound('Libro no encontrado') 
        };
        return res
    };

    async update(id_libros, changes){
        const model = await this.findOne(id_libros);
        const rta = await model.update(changes);
        return rta;
    }
    
    async delete(id_libros){
        const model = await this.findOne(id_libros);
        await model.destroy();
        return {rta: true};
    }

}

module.exports = LibrosService; 