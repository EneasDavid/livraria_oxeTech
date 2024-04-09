const {Router} = require('express');
const AutorController = require('../controllers/AutorController.js');
const autorController = new AutorController();
const router = Router();

router.get('/autor', (req, res) => autorController.pegaTodos(req, res));
router.get('/autor/:id', (req, res) => autorController.pegaPorId(req,res));
router.post('/autor', (req, res) => autorController.cria(req, res));
router.put('/autor/:id', (req, res) => autorController.atualiza(req, res));
router.delete('/autor/:id', (req, res) => autorController.deleta(req,res));

module.exports = router;