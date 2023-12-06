import React from 'react'
import Navbar from './pages/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path="/:id" element={<NotFound/>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  )
}
