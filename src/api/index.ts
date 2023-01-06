import express, { Request, Response } from 'express'
import { MessageResponse } from '../interfaces'
import posts from './posts/posts.controller'
import authors from './authors/authors.controller'

const router = express.Router()

router.get<{}, MessageResponse>('/', (req: Request, res: Response) => {
  res.json({
    message: 'API 🌐',
  })
})
router.use('/posts', posts)
router.use('/authors', authors)

export default router
