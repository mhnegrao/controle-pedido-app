const axios = require('axios');
const fake = require('faker/locale/en');
const pedidoService = require('../services/pedidoService');


/*gerar dados*/
async function gerarDados() {
    for (let i = 1; i <= 1; i++) {

        await pedidoService.create({
            id_cliente: fake.datatype.number(),
            id_user: fake.datatype.number(),
            data_pedido: fake.date.recent(10).toISOString(),
            descricao: fake.lorem.sentence(),
            quantidade: fake.datatype.number(),
            valor_pedido: fake.finance.amount(),
            observacao: fake.lorem.sentences(),
        });
    }
}

gerarDados();
test('Deve haver pedidos', async () => {
    const res = await axios({
        url: 'http://localhost:3000/pedidos',
        method: 'get'
    });
    const pedidos = res.data;
    expect(pedidos).toBe(20);
});