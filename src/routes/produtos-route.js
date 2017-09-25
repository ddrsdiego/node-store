'use strict';

const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto-controller');

router.get('/', produtoController.get);
router.get('/admin/:id', produtoController.getById);
router.get('/:slug', produtoController.getBySlug);
router.get('/tags/:tags', produtoController.getByTags);

router.post('/', produtoController.post);

router.put('/:id', produtoController.put);

router.delete('/:id', produtoController.delete);

module.exports = router;