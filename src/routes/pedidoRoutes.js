const express = require('express');
const router = express.Router();
const pedido = require('../services/pedidoService.js');

router.get('/pedidos', pedido.show);
router.get('/pedidos/:id', pedido.find);
router.post('/pedidos', pedido.create);
router.put('/pedidos/:id', pedido.update);
router.delete('/pedidos/:id', pedido.delete);

module.exports = router;