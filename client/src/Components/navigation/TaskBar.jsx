import { useState } from 'react'
import { Container, TextField } from '@mui/material'

import '../../styles/Task.scss'

const TaskBar = () => {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTitle('')
  }

  return (
    <Container className='TaskContainer' maxWidth='lg'>
      <form onSubmit={handleSubmit}>
        <TextField
          className='TaskBarInput'
          label='Add a task'
          onChange={handleChange}
          placeholder='Title'
          size='small'
          type='text'
          value={title}
        />
      </form>
    </Container>
  )
}

export default TaskBar
