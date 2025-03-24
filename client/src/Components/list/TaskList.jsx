import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox
} from '@mui/material'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import dataJSON from '../data/sample'

const TaskList = () => {

  const displayItems = dataJSON.map((item) => {
    return (
      <ListItem className='TaskItem' key={item.id}>
        <ListItemIcon>
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<RadioButtonCheckedIcon />}
            size='medium'
          />
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
