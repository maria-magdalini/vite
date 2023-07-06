import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import NavMenu from './components/NavMenu'
import Some from './components/Some'
function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <div className='h-[100vh] w-full'>
        <Navbar/>
        <NavMenu />
        <Hero/>
        <Some />
      </div>
    </>
  )
}

export default App
