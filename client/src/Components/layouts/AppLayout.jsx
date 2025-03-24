import { useState } from 'react'
import axios from 'axios'
import TaskBar from '../navigation/TaskBar'
import TaskList from '../list/TaskList'

const AppLayout = () => {
  const [titleData, setTitleData] = useState([])

  const createTitle = async (title) => {
    const data = {
      title: title,
      completed: 0
    }
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/todo-api/v1/items/new',
      data: data
    })
    console.log(response.data)
  }

  return (
    <>
      <TaskBar createTitle={createTitle} />
      <TaskList />
    </>
  )
}

export default AppLayout
