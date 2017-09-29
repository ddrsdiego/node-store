'use sctrict'


const mongoose = require('mongoose');
const ValidationContract = require('../validators/fluent-validator');
const pedidoRepositorio = require('../repositorios/pedido/pedido-repositorio');
const guid = require('guid');

exports.registrarPedido = async(req, res, next) => {
    try {
        await pedidoRepositorio
            .registrarPedido({
                numeroPedido: guid.raw().substring(0, 6),
                cliente: req.body.cliente,
                itens: req.body.itens
            });
        res.status(201).send();
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error
        });
    }
};

exports.consultarPedidos = async(req, res, next) => {
    try {
        let pedidos = await pedidoRepositorio.consultarPedidos();
        res.status(200).send(pedidos);        
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Falha ao consultar os Pedidos!'
        });
    }
};