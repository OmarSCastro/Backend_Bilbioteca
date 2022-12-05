const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class UsuariosService {

    constructor(){}

    async create(data){
        const newUsuario = await models.Usuario.create(data);
        return newUsuario;
    };

    async find(){
        const rta = await models.Usuario.findAll({
            include:['usuario_usuarioLibro']
        });
        return rta;
    };

    async findOne(id){
        const res = await models.Usuario.findByPk(id);
        if (!res) {
            boom.notFound('Usuario no encontrado');
        }
        return res;
    };

    async update(id, changes){
        const model = await this.findOne(id);
        const rta = await model.create(changes);
        return rta
    };
    
    async delete(id){
        const model = await this.findOne(id);
        await model.destroy();
        return {rta:true}
    };
    
}

module.exports = UsuariosService;