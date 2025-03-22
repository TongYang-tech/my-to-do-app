import express from 'express'

const v1Router = express.Router()

v1Router.get('/', (req, res) => {
  res.status(200).json('hello world')
})

v1Router.post('/item/new', (req, res) => {
  res.status(201).json('add item')
})

v1Router.delete("/item/:id", (req, res) => {
  res.status(201).json("remove item");
});

export default v1Router
