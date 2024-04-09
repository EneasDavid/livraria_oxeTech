const {Router}=require('express');
const CategoriaController=require('../controllers/CategoriaController.js');
const categoriaController=new CategoriaController();
const router=Router();

router.get('/categoria', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/categoria/:id', (req, res) => categoriaController.pegaPorId(req,res));
router.post('/categoria', (req, res) => categoriaController.cria(req, res));
router.put('/categoria/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/categoria/:id', (req, res) => categoriaController.deleta(req,res));

module.exports = router;