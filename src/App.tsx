import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ArenaWithBull from './components/ArenaWithBull'
import FunctionalMatador from './components/FunctionalMatador'
import ClassMatador from './components/ClassMatador'
import { Bull } from './components/Bull'

function App() {
  return (
    <div className="App">
      {/* <ArenaWithBull
        matador={<FunctionalMatador />} /> */}
        <Bull />
    </div>
  )
}

export default App
