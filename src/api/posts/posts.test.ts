import { response } from 'express'
import request from 'supertest'
import app from '../../app'
import { Posts } from './post.model'

beforeAll(async () => {
  try {
    await Posts.drop()
  } catch (error) {}
})

describe('GET /api/v1/posts', () => {
  it('response with an array of posts', async () =>
    request(app)
      .get('/api/v1/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('length')
        expect(response.body.length).toBe(0)
      }))
})

// Expected to fail with 422 code
describe('POST /api/v1/posts', () => {
  it('responds with an error if the post is invalid', async () =>
    request(app)
      .post('/api/v1/posts')
      .set('Accept', 'application/json')
      .send({
        title: '',
      })
      .expect('Content-Type', /json/)
      .expect(422)
      .then((response) => {
        expect(response.body).toHaveProperty('message')
      }))
})
