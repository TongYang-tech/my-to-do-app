import TodoList from './components/TodoList.jsx';
import TodoCreate from './components/TodoCreate.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <main className="main">
        <h1>
          React Todo <span>Streamline Your Day, the React Way!</span>
        </h1>
        <TodoList />
        <TodoCreate />
      </main>
    </>
  )
};

export default App;