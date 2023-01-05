import { Router } from 'express'
import { Post } from './post.model'
import * as postService from './posts.service'
const router = Router()

router.get<{}, Post[]>('/', postService.findAll)
router.post('/', postService.createOne)

export default router
