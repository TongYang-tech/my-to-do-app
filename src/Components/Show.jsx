import { useState } from 'react'
import Edit from './Edit'

const Show = ({ item, remove, edit }) => {
  const [showEdit, setEdit] = useState(false)
  console.log(showEdit)
  const handleDelete = () => {
    remove(item.id)
  }

  const handleEdit = () => {
    setEdit(true)
  }

  const handleDoubleClick = () => {
    edit(item.id, item.content, !item.completed)
  }

  const handleSubmit = (id, content) => {
    edit(id, content)
    setEdit(false)
  }

  if (showEdit) {
    return (
      <li className="listItems">
        <Edit item={item} onSubmit={handleSubmit} />
      </li>
    )
  } else {
    return (
      <li className="listItems" onDoubleClick={handleDoubleClick}>
        <p>{item.content}</p>
        <div className="buttonContainer">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </li>
    )
  }
}

export default Show
