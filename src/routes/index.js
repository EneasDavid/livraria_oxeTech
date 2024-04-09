const express = require('express');
const autorRoutes = require('./autorRoutes.js');
const categoriaRoutes = require('./categoriaRoutes.js');

const routes = (app) => {
    app.use(express.json());
    app.use(autorRoutes);
    app.use(categoriaRoutes);
};

module.exports = routes;
