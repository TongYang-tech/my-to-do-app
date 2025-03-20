import { useState } from "react"

const Edit = ({ item, onSubmit }) => {
  const [content, setContent] = useState(item.content)

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(item.id, content)
  }

  return (
    <form>
      <input
        type="text"
        title="save"
        value={content}
        onChange={handleChange}
        placeholder="Edit" />
      <button onClick={handleSubmit}>save</button>
    </form>
  )
}

export default Edit
