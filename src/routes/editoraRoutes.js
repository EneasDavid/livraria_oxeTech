const {Router} = require('express');
const EditoraController = require('../controllers/EditoraController.js');
const editoraController = new EditoraController();
const router = Router();

router.get('/editora', (req, res) => editoraController.pegaTodos(req, res));
router.get('/editora/:id', (req, res) => editoraController.pegaPorId(req,res));
router.post('/editora', (req, res) => editoraController.cria(req, res));
router.put('/editora/:id', (req, res) => editoraController.atualiza(req, res));
router.delete('/editora/:id', (req, res) => editoraController.deleta(req,res));

module.exports = router;