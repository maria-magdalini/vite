import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import NavMenu from './components/NavMenu'
import Some from './components/Some'
function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <div className=' w-full'>
        <Navbar/>
   

        
        
        <Hero/>
        <Some />
      </div>
    </>
  )
}

export default App
