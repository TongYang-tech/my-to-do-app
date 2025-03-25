import express from 'express'
import {
  createItem,
  deleteItem,
  getAllItems
} from "../../controllers/items.controllers.js"

const itemsRouter = express.Router()

itemsRouter.get('/', getAllItems)

itemsRouter.post('/new', createItem)

itemsRouter.delete("/:id", deleteItem);

export default itemsRouter
