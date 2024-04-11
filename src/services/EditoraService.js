const Services = require('./Services.js');

class EditoraService extends Services {
    constructor() {
        super('Editora'); //nome da tabela no banco de dadosa
    }
}
module.exports = EditoraService;