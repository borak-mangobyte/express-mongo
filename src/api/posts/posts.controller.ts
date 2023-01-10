import { Router } from 'express'
import * as postService from './posts.service'
const router = Router()

router.get('/', postService.getAll)
router.get('/:id', postService.findOne)
router.post('/', postService.createOne)
router.delete('/:id', postService.deleteOne)
router.patch('/:id', postService.updateOne)

export default router
