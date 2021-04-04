const pedidosData = require('../data/pedidoData');
exports.show = (req,res) => pedidosData.show(req,res);
exports.create = (pedidos) => pedidosData.create(pedidos);
exports.find = () => pedidosData.find();
exports.update = () => pedidosData.update();
exports.delete = () => pedidosData.delete();