const express = require('express');
const srv = express();

srv.get('/', getInicio);

srv.listen(3030);

function getInicio(pedido, resposta) {
    resposta.send(`acessado`)
};
