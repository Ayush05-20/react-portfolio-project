import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default MyRoutes
