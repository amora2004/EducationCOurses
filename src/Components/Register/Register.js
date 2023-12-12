import React from 'react'
import LogeIn from './LogeIn'
import Sign from './Sign'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Logein" element={<LogeIn />} ></Route>
          <Route path="/Sign" element={<Sign />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Register
