import React from 'react'
import{Route,BrowserRouter,Routes} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div>
            <Navbar/>
            <Hero/>
            <>
    <BrowserRouter>
    

    </BrowserRouter>
    </>
    </div>
  )
}

export default App
