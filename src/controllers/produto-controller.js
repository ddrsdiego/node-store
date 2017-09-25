'use strict';

const mongoose = require('mongoose');
const ValidationContract = require('../validators/fluent-validator');
const produtoRepositorio = require('../repositorios/produto/produto-repositorio');

exports.get = async(req, res, next) => {
    try {
        var data = await produtoRepositorio.get();

        if (typeof data !== 'undefined' && data.length > 0) {
            res.status(200).send(data);
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

exports.getBySlug = (req, res, next) => {
    produtoRepositorio
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(400).send(error);
        });
};

exports.getById = async(req, res, next) => {
    try {
        var produtoId = req.params.id;
        var produto = await produtoRepositorio.getById(produtoId);

        if (!produto || typeof produto === 'undefined' && produto.id.length > 0) {
            res.status(404).send();
        } else {
            res.status(200).send(produto);
        }
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar requisição!',
            error: error
        });
    }
};

exports.getByTags = (req, res, next) => {
    produtoRepositorio
        .getByTags(req.params.tags)
        .then(data => {
            if (typeof data !== 'undefined' && data.length > 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send();
            }
        })
        .catch(error => {
            res.status(400).send(error);
        });
};

exports.post = (req, res, next) => {

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.titulo, 3, 'O título deve conter pelo menos 3 caracteres.');
    contract.hasMinLen(req.body.descricao, 10, 'A descrição deve conter pelo menos 10 caracteres.');
    contract.hasMinLen(req.body.slug, 5, 'O slug deve conter pelo menos 5 caracteres.');
    contract.isGreaterThan(req.body.preco, 0, "O preço deve ser maior que zero.");

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    produtoRepositorio
        .create(req.body)
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso.'
            });
        })
        .catch(error => {
            res.status(400).send({
                message: 'Falha ao cadastro o produto.',
                error: error
            });
        });
};

exports.put = (req, res, next) => {
    produtoRepositorio
        .update(req.params.id, req.body)
        .then(data => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        })
        .catch(error => {
            res.status(400).send({
                message: 'Falha ao atualizar o produto ' + req.params.id + '!',
                error: error
            });
        });
};

exports.delete = async(req, res, next) => {
    try {
        var produtoId = req.params.id;
        var produto = await produtoRepositorio.getById(produtoId);

        if (!produto || typeof produto === 'undefined') {
            res.status(404).send({
                message: 'Produto ' + produtoId + ' não localizado!'
            });
        }

        await produtoRepositorio.delete(produtoId);
        res.status(200).send({
            message: 'Produto excluído com sucesso!'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao excluir o produto ' + produtoId + '!',
            error: error
        })
    }
};