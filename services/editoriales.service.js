
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class EditorialesService {

    constructor(){}

    async create(data){
        const newEditorial = await models.Editorial.create(data);
        return newEditorial;
    };

    async find(){
        const rta = await models.Editorial.findAll();
        return rta
    };

    async findOne(id){
        const res = await models.Editorial.findByPk(id);
        if (!res) {
            throw boom.notFound('Editorial Not Found');
        }
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
        return { rta:true }
    };
}

module.exports = EditorialesService