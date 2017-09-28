'use strict';

const mongoose = require('mongoose');
const ProdutoModel = mongoose.model('Produto');

exports.get = async() => {
    let produto = await ProdutoModel
        .find({
            ativo: true
        }, 'titulo preco slug');

    return produto;
};

exports.getBySlug = (slug) => {
    return ProdutoModel
        .findOne({
            ativo: true,
            slug: slug
        }, 'titulo descricao preco slug, tags');
};

exports.getById = async function (id) {
    var produto = await ProdutoModel.findById(id)
    return produto;
}

exports.getByTags = async(tags) => {

    let produtos = await ProdutoModel
        .find({
            tags: tags,
            ativo: true,
        }, 'titulo descricao preco slug, tags');

    return produtos;
};

exports.create = (data) => {
    var novoProduto = new ProdutoModel(data);
    return novoProduto.save();
};

exports.update = (id, data) => {
    return ProdutoModel
        .findByIdAndUpdate(id, {
            $set: {
                titulo: data.titulo,
                descricao: data.descricao,
                preco: data.preco
            }
        })
};

exports.delete = async(id) => {
    return await ProdutoModel.findByIdAndRemove(id);
};