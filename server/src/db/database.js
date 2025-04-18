import Database from 'better-sqlite3'

export const db = new Database('todo.sqlite')

export const initDb = () => {
  console.log('SQlite database initialized')
  db.exec(
    `
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    );
    `
  );
}
