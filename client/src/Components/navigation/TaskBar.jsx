import { useState } from 'react'
import { Container, TextField, Box } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask'

const TaskBar = (props) => {
  const [title, setTitle] = useState('')
  const { createTitle } = props

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTitle(title)
    setTitle('')
  }

  return (
    <Container className='TaskBarContainer' maxWidth='sm'>
      <Box className='TaskBarItem'>
        <AddTaskIcon fontSize='large' />
      </Box>
      <Box className='TaskBarItem'>
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
