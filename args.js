const express = require('express');

const srv = express();

srv.get('/inicio', getInicio);

srv.listen(3030);

function getInicio(pedido, resposta) {
    resposta.send('recebido pedido');
};