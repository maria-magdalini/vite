import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import NavMenu from './components/NavMenu'
import Some from './components/Some'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <div className=' w-full'>
        <Navbar/>
   

        
        
        <Hero/>
        <Some />
        <Footer/>
      </div>
    </>
  )
}

export default App
