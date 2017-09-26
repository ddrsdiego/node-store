'use strict';

const mongoose = require('mongoose');
const ClienteModel = mongoose.model('Cliente');

exports.create = async(data) => {
    var novoCliente = new ClienteModel(data);
    await novoCliente.save();
};

exports.get = async() => {
    var clientes = await ClienteModel
        .find({
            ativo: true
        });
    return clientes;
};

exports.getByEmail = async(email) => {
    var cliente = await ClienteModel
        .findOne({
            ativo: true,
            email: email
        }, 'nome email username');
        return cliente;
};