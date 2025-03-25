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
  const { title, deleteTitle } = props
  const handleDeleteTitle = () => {
    deleteTitle(title.id)
  }

  return (
    <ListItem className='TaskItem' key={title.id}>
      <ListItemIcon>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon />}
          size='medium'
        />
      </ListItemIcon>
      <ListItemText primary={title.title} />
      <IconButton onClick={handleDeleteTitle}>
        <DeleteOutlinedIcon />
      </IconButton>
    </ListItem>
  )
}

export default Task
