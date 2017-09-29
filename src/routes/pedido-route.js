'use strict';

const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidio-controller');

router.get('/', pedidoController.consultarPedidos);
router.post('/', pedidoController.registrarPedido);

module.exports = router;