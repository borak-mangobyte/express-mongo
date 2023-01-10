import request from 'supertest'
import app from '../../app'
import Post from './post.model'

beforeAll(async () => {
  try {
    await Post.collection.drop()
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

describe('POST /api/v1/posts', () => {
  it('responds with 201 if successfully created a post', async () =>
    request(app)
      .post('/api/v1/posts')
      .set('Accept', 'application/json')
      .send({
        title: 'Testing title',
        content: 'Testing content',
        author: 'Testing author',
        isPublished: false,
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('title')
        expect(response.body).toHaveProperty('content')
        expect(response.body).toHaveProperty('author')
        expect(response.body).toHaveProperty('isPublished')
      }))
})
