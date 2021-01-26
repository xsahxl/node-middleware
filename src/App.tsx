import React, { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  useEffect(() => {
    axios.get('/user').then((res) => {
      console.log(res)
    })
  }, [])

  return <div>Learn React</div>
}

export default App
