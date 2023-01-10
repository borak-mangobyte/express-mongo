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
    res.status(422)
    next(error)
  }
}

export async function getAll(req: Request, res: Response) {
  const data = Post.find()
  const posts = await data
  res.json(posts)
}

export async function findOne(req: Request, res: Response) {
  const targetPost = await Post.findById(req.params.id)
  res.status(302).json(targetPost)
  console.log('Founded post:', targetPost)
}

export async function deleteOne(req: Request, res: Response) {
  const targetPost = await Post.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log('Post deleted')
    })
    .catch((err) => {
      console.log(err)
    })
  res.status(200).json(targetPost)
}

export async function updateOne(req: Request, res: Response) {
  const targetPost = await Post.updateOne({ _id: req.params.id }, req.body, {
    upsert: true,
  })
  res.status(202).json(targetPost)
}
