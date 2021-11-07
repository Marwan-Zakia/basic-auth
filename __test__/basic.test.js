'use strict';
const { server } = require('../src/server'); 
const supertest = require('supertest');
const request = supertest(server);
const { db } = require('../src/models/index');



beforeAll(async () => {
  await db.sync();
});


afterAll(async () => {
  await db.drop();
});

 
// });
describe('testing', () => {
    it('test if it can sign up', async () => {
      const response = await request.post('/signup').send({
            'username': 'marwan', 
            'password': '123456'});
  
      expect(response.status).toEqual(200);
      expect(response.body.username).toEqual('marwan');
    });

 });
 

    it('Middleware Auth ', async () => {
      const response = await request.post('/signin').set(
        'Authorization', ``
      );
      expect(response.status).toEqual(403);
      expect(response.body).toEqual({});
    });


 
