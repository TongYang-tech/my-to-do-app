import express from 'express'
import itemsRouter from './items.routes.js'

const v1Router = express.Router()

v1Router.use('/items', itemsRouter)

export default v1Router
