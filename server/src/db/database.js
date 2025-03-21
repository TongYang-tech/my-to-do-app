import Database from 'better-sqlite3'

const db = new Database("todo.sqlite")

console.log("SQlite database initialized")
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PIMARY KEY,
    title TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )
`)
console.log('Created todos table')

export default db
