'use strict';

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente-controller');

router.get('/', clienteController.get);
router.post('/', clienteController.post);

module.exports = router;