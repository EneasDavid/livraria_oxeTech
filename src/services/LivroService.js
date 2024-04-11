const Services = require('./Services.js');

class LivroService extends Services {
    constructor() {
        super('Livro'); //nome da tabela no banco de dadosa
    }
}
module.exports = LivroService;