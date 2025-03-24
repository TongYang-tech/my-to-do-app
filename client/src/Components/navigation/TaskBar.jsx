import { useState } from 'react'
import { Container, TextField, Box } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask'

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
      <Box className='TaskItem'>
        <AddTaskIcon fontSize='large'/>
      </Box>
      <Box className='TaskItem'>
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
      </Box>
    </Container>
  )
}

export default TaskBar
