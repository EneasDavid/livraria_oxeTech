const Controller=require('./Controller.js');
const EditoraServices=require('../services/EditoraService.js');
const editoraServices=new EditoraServices();

class EditoraController extends Controller{
    constructor(){
        super(editoraServices);
    }
}
module.exports=EditoraController;