import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css'

const App = () => {

  const [blog, setJokes] = useState([]);

  //fetching joke using axios
  //we need to add proxy whenever we use 'api/jokes'
  useEffect(()=>{
    axios.get('/api/blog')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  })

  return (
    <div className="joke-container">
      <h1>Blog Web App</h1>
      {
      blog.map((blogs, index) =>(
        <div className="joke-content" key={blogs.id}>
          <h3>{blogs.title}</h3>
          <p>{blogs.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App