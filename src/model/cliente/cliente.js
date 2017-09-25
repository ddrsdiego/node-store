'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
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