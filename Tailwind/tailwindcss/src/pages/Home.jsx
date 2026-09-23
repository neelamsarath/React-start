import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    const back=()=>{
        navigate(-1)
    }
  return (
   <>
    <button onClick={back}>Back</button>
    <div>Home</div>
   </>
  )
}

export default Home