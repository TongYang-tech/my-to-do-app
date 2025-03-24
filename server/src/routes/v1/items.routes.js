import express from 'express'
import {
  createItem,
  getAllItems,
} from "../../controllers/items.controllers.js"

const itemsRouter = express.Router()

itemsRouter.get('/', getAllItems)

itemsRouter.post('/new', createItem)

itemsRouter.delete("/:id", (req, res) => {
  res.status(201).json("remove item");
})

export default itemsRouter
