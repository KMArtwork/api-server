'use strict'

const server = require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)

describe('Testing if server sends back proper responses & status codes', () => {

  test('Should send a 404 on a bad route', async () => {
    const response = await request.get("/person")
    expect(response.status).toEqual(404);
  })

  test('Should send a 404 on a bad method', async () => {
    const response = await request.post('/person?name=His+Dudeness')
    expect(response.status).toEqual(404);
  })

  test('Should send a 200 when a Food item is successfully created and added to database', async () => {
    // const req = {
    //   "name": "Salad",
    //   "type": "Elven",
    //   "flavors": "Nature",
    //   "canBeSpicy": false,
    //   "hotOrCold": "who cares"
    // };
    // const res = {};
    // const next = jest.fn();
    const response = await request.post('/food')
    expect(response.status).toEqual(200);
  })

  xtest('Should send a 200 if the request is correctly formatted', async () => {
    const response = await request.get("/person?name=Duder")
    expect(response.status).toEqual(200);
  })

  xtest('Should pass if response body is an object', async () => {
    const response = await request.get("/person?name=El+Duderino")
    expect(response.text).toBe(`{"name":"El Duderino"}`)
  })

})