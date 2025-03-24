import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from 'config'
import dotenv from 'dotenv'

import { initDb } from './db/database.js'
import router from './routes/index.js'

const basePath = config.get('basePath')
const app = express()

initDb()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use(basePath, router)

export default app
