import { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import TodoCreate from './components/TodoCreate.jsx';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const createToDo = (title) => {
    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };
    const updatedToDos = [...todos, newToDo];
    setTodos(updatedToDos);
  };

  const removeToDo = (id) => {
    const updatedToDos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedToDos);
  };

  const changeToDo = (id, title, completed) => {
    const updatedToDos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      }
      return todos;
    });
    setTodos(updatedToDos);
  };

  return (
    <>
      <main className="main">
        <h1>
          React Todo <span>Streamline Your Day, the React Way!</span>
        </h1>
        <TodoList todos={todos} removeTodo={removeToDo} changeToDo={changeToDo} />
        <TodoCreate createToDo={createToDo} />
      </main>
    </>
  )
};

export default App;