const {Router}=require('express');
const EditoraController=require('../controllers/EditoraController.js'); 
const editoraService=new EditoraController();
const router=Router();

router.get('/editora', (req, res) => editoraService.pegaTodos(req, res));
router.get('/editora/:id', (req, res) => editoraService.pegaPorId(req,res));
router.post('/editora', (req, res) => editoraService.cria(req, res));
router.put('/editora/:id', (req, res) => editoraService.atualiza(req, res));
router.delete('/editora/:id', (req, res) => editoraService.deleta(req,res));

module.exports=router;