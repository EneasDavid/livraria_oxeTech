const Services = require('./Services.js');

class CategoriaService extends Services{
    constructor(){
        super('Categoria'); //nome da tabela no banco de dadosa
    }
}

module.exports=CategoriaService;
