'use strict'

const mongoose = require('mongoose');
const PedidoModel = mongoose.model('Pedido');

exports.criar = async(pedido) => {
    let novoPedido = new PedidoModel(pedido);
    return await novoPedido.save(novoPedido);
};

exports.consultarPedidos = async() => {
    let pedidos = await PedidoModel.find({});
    console.log(pedidos);
    return pedidos;
};

exports.consultarPedidoPeloNumero = async(numeroPedido) => {
    let pedido = await PedidoModel
        .find({
            numeroPedido: numeroPedido
        });
    return pedido;
};