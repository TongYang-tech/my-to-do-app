import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from 'config'

import router from './routes/index.js'

const basePath = config.get('basePath')
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use(basePath, router)

export default app
