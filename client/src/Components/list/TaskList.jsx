import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox
} from '@mui/material'
import dataJSON from '../data/sample'

const TaskList = () => {

  const displayItems = dataJSON.map((item) => {
    return (
      <ListItem className='TaskItem' key={item.id}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    )
  })

  return (
    <Container className='TaskListContainer'>
      <List className='TaskList'>
        {displayItems}
      </List>
    </Container>
  )
}

export default TaskList
