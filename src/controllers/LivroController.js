const Controller=require('./Controller.js');
const LivroServices=require('../services/LivroService.js');
const livroServices=new LivroServices();

class LivroController extends Controller{
    constructor(){
        super(livroServices);
    }
}
module.exports=LivroController;