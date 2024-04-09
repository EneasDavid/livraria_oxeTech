const express = require('express');

const autorRoutes = require('./autorRoutes.js');
const categoriaRoutes = require('./categoriaRoutes.js');
const usuarioRoutes=require('./usuarioRoutes.js');
const editoraRoutes=require('./editoraRoutes.js');

const routes = (app) => {
    app.use(express.json());
    app.use(usuarioRoutes);
    app.use(autorRoutes);
    app.use(categoriaRoutes);
    app.use(editoraRoutes);
};

module.exports = routes;