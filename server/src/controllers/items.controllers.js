import { db } from '../db/database.js'

export const getAllItems = (_req, res) => {
  try {
    const stmt = db.prepare("SELECT id, title, completed from todos")
    const result = stmt.all()
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: "Database Error: " + err })
  }
}

export const createItem = (req, res) => {
  const { title, completed } = req.body
  try {
    const stmt = db.prepare('INSERT INTO todos(title, completed) VALUES (?,?)')
    const result = stmt.run([title, completed])
    const newTitle = db.prepare('SELECT id, title, completed FROM todos WHERE id = ?').get(result.lastInsertRowid)
    res.status(201).json(newTitle)
  } catch (err) {
    res.status(500).json({ error: 'Database Error: ' + err })
  }
}