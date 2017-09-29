'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedido = new Schema({
    numeroPedido: {
        type: String,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    dataCriacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['registrado', 'realizado'],
        default: 'registrado'
    },
    itens: [{
        quantidade: {
            type: Number,
            required: true,
            default: 1
        },
        preco: {
            type: Number,
            required: true
        },
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
        }        
    }]
});

module.exports = mongoose.model('Pedido', pedido);