const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});

routes(app);

module.exports = app;