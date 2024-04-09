const Services = require('./Services.js');

class AutorService extends Services {
    constructor() {
        super('Autor'); //nome da tabela no banco de dadosa
    }
}
module.exports = AutorService;