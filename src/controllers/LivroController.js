const Controller=require('./Controller.js');
const LivroServices=require('../services/LivroService.js');
<<<<<<< HEAD
const livroService=new LivroServices();
class LivroController extends Controller{
    constructor(){
        super(livroService);
=======
const livroServices=new LivroServices();

class LivroController extends Controller{
    constructor(){
        super(livroServices);
>>>>>>> frontEndByEneas
    }
}
module.exports=LivroController;