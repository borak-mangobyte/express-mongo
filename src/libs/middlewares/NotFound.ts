import { NextFunction, Request, Response } from 'express'

export default function notFound(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404)
  const error = new Error(`${req.originalUrl} - Route Not Found `)
  next(error)
}
