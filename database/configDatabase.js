// let faker = require('faker');
// faker.locale='pt-br',
// const {
//     Sequelize
// } = require('sequelize');

// const dbPg = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     database: 'controle-pedido',
//     port: 5432,
//     username: 'postgres',
//     password: 'x3p06x3a'
// });

// async function connectPg() {
//     try {
//         await dbPg.authenticate();
//         console.log('Db conectado');

//     } catch (err) {
//         console.error(`Falha ao concetar ao banco de dados ${err}`);
//     }
// }
// async function desconnectPg() {
//     try {
//         dbPg.close();
//         console.log('Db desconectado');
//     } catch (err) {
//         console.error(`Falha ao concetar ao banco de dados ${err}`);
//     }
// }

// async function createTablePedido() {
//     const Pedido = dbPg.define('pedido', {
//         id: {
//             type: Sequelize.INTEGER,
//             autoincrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         idCliente: {
//             type: Sequelize.INTEGER,
//             autoincrement: false,
//             allowNull: false,
//         },
//         idUser: {
//             type: Sequelize.INTEGER,
//             allowNull: false,

//         },
//         descricao: {
//             type: DataTypes.STRING(100),
//             allowNull: false,

//         },
//         quantidadeItens: {
//             type: Sequelize.INTEGER,
//             allowNull: false
//         },
//         valorPedido: {
//             type: DataTypes.DECIMAL(10, 2),
//             allowNull: false
//         },
//         pago: {
//             type: DataTypes.BOOLEAN
//         },
//         valorPago: {
//             type: DataTypes.DECIMAL(10, 2),
//         },
//         formaPagamento: {
//             type: Sequelize.INTEGER
//         },
//         condicaoPagamento: {
//             type: Sequelize.INTEGER
//         },
//         observacao: {
//             type: DataTypes.TEXT
//         },
//         cancelado: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false
//         },
//         ativo: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: true
//         },
//         dataPedido: {
//             type: DataTypes.DATE,
//             defaultValue: DataTypes.NOW
//         },
//         dataAlteracao: {
//             type: DataTypes.DATE
//         }
//     })
// }

// module.exports = {
//     connectPg,
//     desconnectPg
// }

const pgp=require('pg-promise')();
const db=pgp({
    user:'postgres',
    password:'x3p06x3a',
    host:'localhost',
    port:5432,
    database:'controle-pedido'
});

module.exports=db;