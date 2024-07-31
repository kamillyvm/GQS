const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pedidos = [];
let rotas = [];
let melhorRota = [];

app.get('/', (req, res) =>{
    res.send('ola!');
})

app.get('/pedido', (req, res) =>{
    res.status(200).json(pedidos);
})

app.get('/rota', (req, res) =>{
    res.status(200).json(rotas);
})

app.post('/CriarPedido', (req, res) =>{
    const {latitude, longitude, endereco, produto, quantidade} = req.body;
    const pedido = {id: pedidos.length +1, latitude, longitude, endereco, produto, quantidade}
    pedidos.push({endereco, produto, quantidade});
    res.status(201).json(pedido);
})

app.post('/CriarRota', (req, res) =>{
    const {latitude, longitude} = req.body;
    const rota = {id: rotas.length +1, latitude, longitude}
    rotas.push({latitude, longitude});
    res.status(201).json(rota);
})

app.post('/melhorRota', (req, res) =>{
    const {pedidos, rotas} = req.body;
    const melhorRota = verificarMelhorRota(pedidos, rotas);
    res.json(melhorRota);
});

app.listen(port, () =>{
    console.log(`rodando em http://localhost:3000/pedidos${port}`);
});

module.exports = app;