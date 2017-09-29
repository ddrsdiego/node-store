'use strict'

const mongoose = require('mongoose');
const PedidoModel = mongoose.model('Pedido');

exports.registrarPedido = async(pedido) => {
    let novoPedido = new PedidoModel(pedido);
    await novoPedido.save();
};

exports.consultarPedidos = async() => {
    let pedidos = await PedidoModel
        .find({

        }, 'numeroPedido status cliente itens')
        .populate('cliente', 'nome')
        .populate('itens.produto', 'titulo');
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