'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString, {
    useMongoClient: true
});

//Carrega Models
const ProdutoModel = require('./model/produto/produto');
const ClienteModel = require('./model/cliente/cliente')

//Carrega Routes
const indexRoute = require('./routes/index-route');
const produtoRoute = require('./routes/produtos-route');
const clienteRoute = require('./routes/cliente-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/clientes', clienteRoute);
app.use('/produtos', produtoRoute);

module.exports = app;