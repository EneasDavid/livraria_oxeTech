const database = require('../models');

class AutorController {
    static async pegaTodos (req, res) {
        try {
            const listaDeAutores = await database.Autor.findAll();
            return res.status(200).json(listaDeAutores);
        } catch (erro) {
            return res.status(500).json(erro.message);
        }
    }
}
module.exports = AutorController