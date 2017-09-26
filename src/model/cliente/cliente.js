'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
    ativo: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Cliente', clienteSchema);