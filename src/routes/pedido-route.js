'use strict';

const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidio-controller');

router.get('/', pedidoController.consultarPedidos);

module.exports = router;