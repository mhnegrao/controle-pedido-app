const db = require('../../database/configDatabase');
exports.show = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM pedido');
        return res.json(result);
    } catch (error) {
        console.log(error);
    }
}
exports.create = async (pedido) => {

    let pedidoInsert = Object.keys(pedido).map(function (key, index) {
        if (typeof pedido[key] === 'string') {
            pedido[key] = `'${ pedido[key]}'`;
        } else if (typeof pedido[key] === 'date') {
            pedido[key] = `'${new Date(pedido[key]).toString()}'`
        }
        return pedido[key];
    });
    let fieldInsert = Object.keys(pedido).map(function (key, index) {

        return key;
    });

    try {
        const query = `INSERT INTO pedido (${fieldInsert}) VALUES (${pedidoInsert}) returning *`;
      
        const result = await db.query(query);
       
        return result;
    } catch (error) {
        console.log(`Erro ao inserir pedido: ${error}`);
    }
}