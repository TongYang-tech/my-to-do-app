import { useState } from 'react'
import Create from './Create'
import List from './List'

const App = () => {
  const [todos, setTodos] = useState([])
  console.log(todos)
  const createTodo = (content) => {
    const newTodo = {
      id: crypto.randomUUID(),
      content: content,
      completed: false
    }
    const updateTodo = [...todos, newTodo]
    setTodos(updateTodo)
  }

  const removeToDo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id)
    setTodos(updateTodo)
  }

  const editTodo = (id, content, completed = false) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content, completed }
      }
      return todo
    })
    setTodos(updateTodo)
  }

  return (
    <main className='mainContainer'>
      <h1>
        Daily Tasks
      </h1>
      <Create create={createTodo} />
      <List items={todos} remove={removeToDo} edit={editTodo} />
    </main>
  )
}

export default App
