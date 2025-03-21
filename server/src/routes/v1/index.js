import express from 'express'
import db from '../../db/database.js'

const v1Router = express.Router()

v1Router.get('/', (req, res) => {
  const stmt = db.exec('SELECT * FROM todos')
  res.status(200).json(stmt)
})

export default v1Router
