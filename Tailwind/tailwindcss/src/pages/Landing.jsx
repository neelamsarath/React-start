import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate=useNavigate()
    const [count,setCount]=useState(0);
    // const cout=0;
    useEffect(()=>{
        console.log("Button Clicked");
        
    },)
    const increment=()=>{
        setCount(count+1)
        // cout++;
    }
      const decrement=()=>{
        setCount(count-1)
        // cout--;
    }
    const move=()=>{
        navigate("/home")
    }
    
  return (
     <>
  <Navbar name="sarath" age="21"/>
  <button onClick={increment}>+</button>
  <h1>{count}</h1>
  {/* <h1>{cout}</h1> */}
  <button onClick={decrement}>-</button>

  <button onClick={move} className=' text-light p-5 rounded-2'>Home</button>

<div className="min-h-screen bg-gray-100 p-8">

<h1 className="text-4xl font-bold text-center mb-8">

Student Managemen

</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg shadow">

<h2 className="text-2xl font-bold">

Arun

</h2>

<p className="text-gray-600 mt-2">

Course: .NET

</p>

<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">

View

</button>

</div>

<div className="bg-white p-6 rounded-lg shadow">

<h2 className="text-2xl font-bold">

Kumar

</h2>

<p className="text-gray-600 mt-2">

Course: React

</p>

<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">

View

</button>

</div>

<div className="bg-white p-6 rounded-lg shadow">

<h2 className="text-2xl font-bold">

Priya

</h2>

<p className="text-gray-600 mt-2">

Course: Python

</p>

<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">

View

</button>

</div>

</div>

</div>
  </>
  )
}

export default Landing