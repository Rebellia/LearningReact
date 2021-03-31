import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  //const [users, setUsers] = useState([])
  const [movies, setMovies] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/movies')
    setMovies(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <>
    <div>
      {movies.map(m => <h4 key={m.title}>Title : {m.title}</h4>)}
    </div>
    </>
  )
}

export default App