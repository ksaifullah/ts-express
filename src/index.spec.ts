import request from 'supertest';
import app from '.';

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Hello World!');
  });
});
