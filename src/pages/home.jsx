import { Box } from '@chakra-ui/react'
import React from 'react'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import Features from '../components/features/features'
import Footer from '../components/footer/footer'
import MakeTime from '../components/makeTime/makeTime'
import Menu from '../components/menu/menu'
import Navbar from '../components/navbar/navbar'
import Take from '../components/take/take'
import Testimonial from '../components/testimonial/testimonial'

const Home = () => {
  return (
    <Box>
        <Navbar />
        <MakeTime />
        <Features />
        <About />
        <Menu />
        <Take />
        <Testimonial />
        <Contact />
        <Footer />
    </Box>
  )
}

export default Home