import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ArenaWithBull from './components/ArenaWithBull'
import { TerrifiedMatador } from './components/TerrifiedMatador'
import Bull from './components/Bull'

function App() {
  return (
    <div className="App">
      <ArenaWithBull
        matador={<TerrifiedMatador />} />
    </div>
  )
}

export default App
