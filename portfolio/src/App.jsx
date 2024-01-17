import React, { useState } from 'react'
import './App.css'
import Sidenav from './Components/SideNav'
import Main from './Components/Main'
import Work from './Components/Work'

function App() {

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
    </div>
  )
}

export default App
