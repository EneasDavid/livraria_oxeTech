const {Router}=require('express');
const UsuarioController=require('../controllers/UsuarioController.js');
const usuarioService=new UsuarioController();
const router=Router();

router.get('/usuario', (req, res) => usuarioService.pegaTodos(req, res));
router.get('/usuario/:id', (req, res) => usuarioService.pegaPorId(req,res));
router.post('/usuario', (req, res) => usuarioService.cria(req, res));
router.put('/usuario/:id', (req, res) => usuarioService.atualiza(req, res));
router.delete('/usuario/:id', (req, res) => usuarioService.deleta(req,res));

module.exports=router;