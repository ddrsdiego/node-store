'use sctrict'


const mongoose = require('mongoose');
const ValidationContract = require('../validators/fluent-validator');
const pedidoRepositorio = require('../repositorios/pedido/pedido-controller');

exports.consultarPedidos = async(req, res, next) => {
    let pedidos = await pedidoRepositorio.consultarPedidos();
    if (typeof data !== 'undefined' && data.length > 0) {
        res.status(200).send(pedidos);
    } else {
        res.status(404).send();
    }
};