const Services = require('./Services.js');

class CategoriaService extends Services{
    constructor(){
        super('categorias'); //nome da tabela no banco de dadosa
    }
}

module.exports=CategoriaService;
