import { useState } from 'react'

const Create = ({ create }) => {
  const [content, setContent] = useState('')

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    create(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="content"
        id="content"
        placeholder="Title"
        value={content}
        onChange={handleChange} />
    </form>
  )
}

export default Create