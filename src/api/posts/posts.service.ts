import { NextFunction, Request, Response } from 'express'
import Post from './post.model'

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const post = new Post(req.body)
    const createdPost = await post.save()
    res.status(201).json(createdPost)
  } catch (error) {
    console.log(error)
    res.status(422)
    next(error)
  }
}

export async function findAll(req: Request, res: Response) {
  const data = Post.find()
  const posts = await data
  res.json(posts)
}
