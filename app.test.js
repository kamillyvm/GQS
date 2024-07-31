const request = require('supertest');
const app = require('./app');

describe('teste com pedidos', () =>{
    it('se a lista estiver vazia', async () =>{
        const res = await request(app).get('/listarPedidos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    })

    it('Criar um pedido', async () =>{
        const endereco = {
            latitude: 2,
            longitude: 2
        }

        const produto = 'celular';
        const quantidade = 2;


        const pedido = {endereco, produto, quantidade};
        const res = await request(app).post('/CriarPedido').send(pedido);
        expect(res.statusCode).toEqual(201);

        expect(res.body.endereco).toEqual(pedido.endereco);
        expect(res.body.latitude).toEqual(pedido.endereco.latitude);
        expect(res.body.longitude).toEqual(pedido.endereco.longitude);
        expect(res.body.produto).toEqual(pedido.produto);
        expect(res.body.quantidade).toEqual(pedido.quantidade);
    })

})

describe('TesteRetornoListaRota', () =>{
    test('ListaVaziaRotas', async () =>{
        const res = await request(app).get('ListarRota');
        expect(res.statusCode).toEqual(200);

    })
})