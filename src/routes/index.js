const express = require('express');
const autor = require('./autorRoutes.js');

const routes = (app) =>{
    app.use(express.json()),
    app.use(autor)
}
module.exports = routes