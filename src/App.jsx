import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import './App.css';
const App = () => {
  return (
    <main className="main">
      <h1>
        React Todo <span>Streamline Your Day, the React Way!</span>
      </h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate createTodo={createTodo} />
    </main>
  );
};

export default App;