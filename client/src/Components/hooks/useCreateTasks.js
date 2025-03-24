import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const useCreate = (title) => {
  const { data, error, isLoading } = useQuery('createTask', async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/todo-api/v1/item/new',
        data: {
          title: title
        }
      })
      return response.data
    } catch (err) {
      console.error(err)
      throw err
    }
  })
  return { data, error, isLoading }
}

export default useCreate
