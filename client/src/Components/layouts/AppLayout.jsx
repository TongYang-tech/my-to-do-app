import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskBar from '../navigation/TaskBar'
import TaskList from '../list/TaskList'

const AppLayout = () => {
  const [titleData, setTitleData] = useState([])

  const getTitleList = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/todo-api/v1/items'
    })
    const data = response.data
    setTitleData(data)
  }

  const createTitle = async (title) => {
    const body = {
      title: title,
      completed: 0
    }

    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/todo-api/v1/items/new',
      data: body
    })
    const data = response.data
    setTitleData([...titleData, data])
  }

  const deleteTitle = async (id) => {
    await axios({
      method: 'delete',
      url: `http://localhost:8080/todo-api/v1/items/${id}`
    })
    const updateTitleData = titleData.filter((title) => title.id !== id)
    setTitleData(updateTitleData)
  }

  useEffect(() => {
    getTitleList()
  }, [])

  return (
    <>
      <TaskBar createTitle={createTitle} />
      <TaskList Titles={titleData} deleteTitle={deleteTitle}/>
    </>
  )
}

export default AppLayout
