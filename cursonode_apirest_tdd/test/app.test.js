const request = require('supertest');

const app = require('../src/app');

test('Verificando funcionamento do app', () =>{
    return request(app).get('/')
        .then(res => expect(res.status).toBe(200));
});