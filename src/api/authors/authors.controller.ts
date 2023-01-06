import { Router } from 'express'
import * as authorService from './authors.service'
const router = Router()

router.post('/', authorService.createOne)
router.get('/', authorService.findAll)

export default router
