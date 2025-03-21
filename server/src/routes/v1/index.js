import express from 'express'

const v1Router = express.Router()

v1Router.get('/', (req, res) => {
  res.send('hello world')
})

export default v1Router
