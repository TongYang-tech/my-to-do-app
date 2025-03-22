import { useState } from 'react'
import { Container, FormControl, Input, InputLabel } from '@mui/material'

const App = () => {
  const [title, setTitle] = useState('')

  return (
    <Container>
      <FormControl>
        <InputLabel>Add a task</InputLabel>
        <Input type='text' value={title}/>
      </FormControl>
    </Container>
  )
}

export default App
