import { useState } from 'react'
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton
} from '@mui/material'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const Task = (props) => {
  const [strike, setStrike] = useState(false)
  const { title, deleteTitle } = props

  const handleDeleteTitle = () => {
    deleteTitle(title.id)
  }

  const handleStrike = () => {
    setStrike(!strike)
  }

  return (
    <ListItem className='TaskListItemContainer'>
      <ListItemIcon onClick={handleStrike}>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon />}
          size='medium'
        />
      </ListItemIcon>
      <ListItemText
        className='TaskListText'
        primary={title.title}
        style={{
          textDecoration: strike ? "line-through" : "none"
        }} />
      <IconButton className='TaskListButton'onClick={handleDeleteTitle}>
        <DeleteOutlinedIcon />
      </IconButton>
    </ListItem>
  )
}

export default Task
