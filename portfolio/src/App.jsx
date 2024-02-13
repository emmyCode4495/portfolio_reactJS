import React, { useState } from 'react'
import './App.css'
import Sidenav from './Components/SideNav'
import Main from './Components/Main'
import Work from './Components/Work'
import Projects from './Components/Projects'

function App() {

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
    </div>
  )
}

export default App
