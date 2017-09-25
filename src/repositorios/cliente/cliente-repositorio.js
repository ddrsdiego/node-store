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