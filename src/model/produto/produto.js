'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoSchema = new schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Produto', produtoSchema);