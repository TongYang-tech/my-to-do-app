import { useState } from 'react';
import TodoEdit from './TodoEdit';
import DeleteIcon from '../../src/delete.png'

const TodoShow = ({ todo, removeTodo, changeTodo }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    removeTodo(todo.id);
  };

  const handleDoubleClick = (e) => {
    changeTodo(todo.id, todo.title, !todo.completed);
  };

  const handleSubmit = (id, title) => {
    changeTodo(id, title);
    setShowEdit(false);
  };

  return (
    <li className="todo" onDoubleClick={handleDoubleClick}>
      <p className={todo.completed ? "completed" : undefined}>{todo.title}</p>
      <div className="actions">
        <button onClick={handleDelete}>
          <img src={DeleteIcon} title="Delete" />
        </button>
      </div>
    </li>
  );
};

export default TodoShow;