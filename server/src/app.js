import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from 'config'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { initDb } from './db/database.js'
import router from './routes/index.js'

const dist = '/client/dist'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const buildPath = path.join(__dirname, `../../${dist}`)
const assetsPath = path.join(__dirname, `../../${dist}/assets`)

const basePath = config.get('basePath')
const app = express()

initDb()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use(basePath, router)
app.use(`${basePath}/assets`, express.static(assetsPath, { index: false }))

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: buildPath
  })
})

export default app
