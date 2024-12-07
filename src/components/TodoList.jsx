/* eslint-disable react/prop-types */
import TodoShow from './TodoShow.jsx';

const TodoList = ({ todos, removeTodo, changeToDo }) => {
  const renderedTodos = todos.map((todo) => {
    <TodoShow
      key={todos.id}
      todo={todo}
      removeToDo={removeTodo}
      changeToDo={changeToDo}
    />
  });

  return (
    <>
      <ul className="todo-list">{renderedTodos}</ul>
    </>
  );
};

export default TodoList;