import { Router } from 'express'
import * as postService from './posts.service'
const router = Router()

router.get('/', postService.findAll)
router.post('/', postService.createOne)

export default router
