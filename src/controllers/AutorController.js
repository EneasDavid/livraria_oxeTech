const Controller = require('./Controller.js');
const AutorServices = require('../services/AutorService.js');
const autorServices = new AutorServices();

class AutorController extends Controller {
    constructor(){
        super(autorServices);
    }
}
module.exports = AutorController;