const express = require('express');
const autorRoutes = require('./autorRoutes.js');
const categoriaRoutes = require('./categoriaRoutes.js');
const usuarioRoutes = require('./usuarioRoutes.js');
const editoraRoutes = require('./editoraRoutes.js');
const livroRoutes = require('./livroRoutes.js');

const routes = (app) => {
    app.use(express.json());
    app.use(autorRoutes);
    app.use(categoriaRoutes);
    app.use(usuarioRoutes);
    app.use(editoraRoutes);
    app.use(livroRoutes);
};

module.exports = routes;
