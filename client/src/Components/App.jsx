import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/')
        const json = response.data
        setData(json)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <p>{data}</p>
  )
}

export default App
