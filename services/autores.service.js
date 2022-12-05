
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class AutoresService {

    constructor(){}

    async create(data){ 
        const newAutor = await models.Autor.create(data)
        return newAutor;
    };

    async find(){
        const rta = await models.Autor.findAll({
            includes: ['libros_autores']
        }); 
        return rta
    };
    
    async findOne(id){
        const res = await models.Autor.findByPk(id, {
            includes: ['libros_autores']
        });
        if (!res) {
            boom.notFound('Autor No Encontrado')
        };
        return res
    };

    async update(id, changes){
        const model = await this.findOne(id);
        const rta = await model.update(changes);
        return rta;
    };
    
    async delete(id){
        const model = await this.findOne(id);
        await model.destroy();
        return {rta:true};
    }

}
module.exports = AutoresService;