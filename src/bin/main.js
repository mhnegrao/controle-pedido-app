const express = require('express');
const router = require('../routes/pedidoRoutes')
const app = express();
const port = 3000;
try {
    app.use(router);
    app.listen(port);
    console.log(`Api iniciada em http://localhost:${port}`);
} catch (err) {
    console.log(`Erro em http://localhost:${port} --> ${err}`);
}