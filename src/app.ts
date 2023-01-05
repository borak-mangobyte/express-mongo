import { Request, Response } from 'express'
import express from 'express'
import morgan from 'morgan'
import api from './api'
import cors from 'cors'
import * as middlewares from './libs/middlewares'
import { MessageResponse } from './interfaces'

require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get<{}, MessageResponse>('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hi!',
  })
})

app.use('/api/v1', api)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app
