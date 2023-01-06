import { NextFunction, Request, Response } from 'express'
import Author from './authors.model'

export async function createOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const author = new Author(req.body)
    const savedAuthor = await author.save()
    res.json(savedAuthor)
    res.status(201)
  } catch (error) {
    console.log(error)
    res.status(422)
    next(error)
  }
}

export async function findAll(req: Request, res: Response) {
  const data = Author.find()
  const authors = await data
  res.json(authors)
}
