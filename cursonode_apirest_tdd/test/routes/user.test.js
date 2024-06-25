const request = require('supertest');

const app = require('../../src/app');

const mail = `${Date.now()}@mail.com`;

const MAIN_ROUTE = '/users';

test('Deve listar todos os usuários', () =>{
    return request(app).get(MAIN_ROUTE)
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThanOrEqual(0);
        });
});

test('Deve inserir usuário com sucesso', () =>{
    return request(app).post(MAIN_ROUTE)
        .send({name: 'Daniel', email: mail, passwd: '123456'})
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Daniel');
        });
});

test('Não deve inserir usuário sem nome', () => {
    return request(app).post(MAIN_ROUTE)
      .send({ email: 'teste@mail.com', passwd: '123456' })
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Nome é um atributo obrigatório');
      });
});

test('Não deve inserir usuário sem email', async () => {
    const result = await request(app).post(MAIN_ROUTE)
        .send({ name: 'Roberto Giffone', passwd: '123456' })
    expect(result.status).toBe(400);
    expect(result.body.error).toBe('E-mail é um atributo obrigatório');
});
  
test('Não deve inserir usuário sem senha', (done) => {
    request(app).post(MAIN_ROUTE)
        .send({ name: 'Roberto Giffone', email: 'roberto@mail.com' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Senha é um atributo obrigatório');
            done();
        })
        .catch(err => done.fail(err));
});

test('Não deve inserir usuário com email existente', () => {
    return request(app).post(MAIN_ROUTE)
      .send({ name: 'Daniel', email: mail, passwd: '123456' })
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Já existe um usuário com esse e-mail');
      });
});
