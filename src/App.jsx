import React from 'react'
import { createBrowserRouter,BrowserRouter,Routes,Route } from 'react-router-dom'
import { Registrar } from './components/Registrar.jsx'
import { Login } from './components/Login.jsx'



export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/registrar' element={<Registrar/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}
