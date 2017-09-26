'use strict';

var mongoose = require('mongoose');
var validatorContract = require('../validators/fluent-validator');
var clienteRepositorio = require('../repositorios/cliente/cliente-repositorio');

exports.post = async(req, res, next) => {
    try {
        var cliente = await clienteRepositorio.getByEmail(req.body.email)
        if (cliente !== null) {
            res.status(400).send({
                message: 'Cliente já cadastrado com o email ' + req.body.email + '!'
            }).end();
            return;
        }


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
        var clientes = await clienteRepositorio.get();

        if (typeof clientes !== 'undefined' && clientes.length > 0) {
            res.status(200).send(clientes);
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