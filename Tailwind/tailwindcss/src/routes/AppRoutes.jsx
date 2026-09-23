import React from 'react'
import Landing from '../pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </>
  )
}

export default AppRoutes