import { useState } from 'react';

const TodoCreate = (createToDo) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createToDo(title);
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-create">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add a Task"
          value={title}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default TodoCreate;