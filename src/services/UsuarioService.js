const Services = require('./Services.js');

class UsuarioService extends Services {
    constructor() {
        super('Usuario'); //nome da tabela no banco de dadosa
    }
}
module.exports = UsuarioService;