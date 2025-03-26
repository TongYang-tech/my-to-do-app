import { Container, List } from '@mui/material'
import Task from './Task'

const TaskList = (props) => {
  const { Titles, deleteTitle } = props

  const displayItems = Titles.map((title) => {
    return (
      <Task key={title.id} title={title} deleteTitle={deleteTitle} />
    )
  })

  return (
    <Container maxWidth='sm'>
      <List>
        {displayItems}
      </List>
    </Container>
  )
}

export default TaskList
