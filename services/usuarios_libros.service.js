
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class UsuariosLibros{

    constructor(){}

    async create( data ){
        const newUsuarioLibro = await models.UsuarioLibro.create(data);
        return newUsuarioLibro
    };   

    async find(){
        const rta = await models.UsuarioLibro.findAll();
        return rta;
    };

    async findOne(id){
        const res = await models.UsuarioLibro.findByPk(id);
        if (!res) {
            boom.notFound('Relación no encontrada');
        }
        return res;
    };

    async delete(id){
        const model = await this.findOne(id);
        await model.destroy();
        return {rta:true}
    };

};

module.exports = UsuariosLibros;