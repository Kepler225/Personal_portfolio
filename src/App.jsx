import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero'
import About from './Components/About/About'
import Services from './Components/Services'
import Mywork from './Components/Mywork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
