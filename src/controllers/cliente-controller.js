'use strict';

var mongoose = require('mongoose');
var validatorContract = require('../validators/fluent-validator');
var clienteRepositorio = require('../repositorios/cliente/cliente-repositorio');

exports.post = async(req, res, next) => {
    try {
        await clienteRepositorio.create(req.body);
        res.status(200).send({
            message: 'Cliente criado com sucesso!'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar requisição!',
            error: error
        });
    }
};

exports.get = async(req, res, next) => {
    try {
        var clientes = clienteRepositorio.get();

        if (typeof clientes !== 'undefined' && clientes.length > 0) {
            res.status(200).send(data);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar requisição!',
            error: error
        });
    }
};