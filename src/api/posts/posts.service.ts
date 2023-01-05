import { NextFunction, Request, Response } from 'express'
import { InsertOneResult } from 'mongodb'
import { ZodError } from 'zod'
import { Post, Posts, PostWithId } from './post.model'

export async function findAll(req: Request, res: Response) {
  const result = Posts.find()
  const posts = await result.toArray()
  res.json(posts)
}

export async function createOne(
  req: Request<{}, InsertOneResult<Post>, Post>,
  res: Response<InsertOneResult<Post>>,
  next: NextFunction
) {
  try {
    const validateResult = Post.parse(req.body)
    const insertedResult = await Posts.insertOne(validateResult)
    if (!insertedResult.acknowledged)
      throw new Error('Error while trying to insert Post.')
    res.status(201)
    res.json(insertedResult)
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422)
      next(error)
    }
  }
}
