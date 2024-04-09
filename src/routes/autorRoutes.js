const { Router } = require('express');
const AutorController = require('../controllers/AutorController.js');

const routes = Router();

routes.get('/autor', AutorController.pegaTodos);

module.exports = routes;
