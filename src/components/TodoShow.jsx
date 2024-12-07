/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoEdit from './TodoEdit.jsx';
import DeleteIcon from '../../src/delete.png'
import EditIcon from '../../src/edit.png'

const TodoShow = ({ todo, removeTodo, changeToDo }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    removeTodo(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDoubleClick = () => {
    changeToDo(todo.id, todo.title, !todo.completed);
  };

  const handleSubmit = (id, title) => {
    changeToDo(id, title);
    setShowEdit(false);
  };

  if (showEdit) {
    return (
      <>
        <li className="todo">
          <TodoEdit todo={todo} onSubmit={handleSubmit} />
        </li>
      </>
    )
  }

  return (
    <>
      <li className="todo" onDoubleClick={handleDoubleClick}>
        <p className={todo.completed && 'completed'}>{todo.title}</p>
        <div className="actions">
          <button onClick={handleDelete}>
            <img src={DeleteIcon} title="Delete" />
          </button>
          <button onClick={handleEdit}>
            <img src={EditIcon} title="Edit" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoShow;