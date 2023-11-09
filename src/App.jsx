import { Box, Menu } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Features from './pages/features'
import Home from './pages/home'

const App = () => {
  return (
    <Box>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Box>
  )
}

export default App