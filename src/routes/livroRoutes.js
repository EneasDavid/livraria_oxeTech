const {Router} = require('express');
const LivroController = require('../controllers/LivroController.js');
const livroController = new LivroController();
const router = Router();

router.get('/livro', (req, res) => livroController.pegaTodos(req, res));
router.get('/livro/:id', (req, res) => livroController.pegaPorId(req,res));
router.post('/livro', (req, res) => livroController.cria(req, res));
router.put('/livro/:id', (req, res) => livroController.atualiza(req, res));
router.delete('/livro/:id', (req, res) => livroController.deleta(req,res));

module.exports = router;