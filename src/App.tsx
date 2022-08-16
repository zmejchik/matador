import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ArenaWithBull from './components/ArenaWithBull'
import FunctionalMatador from './components/FunctionalMatador'
import ClassMatador from './components/ClassMatador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <ArenaWithBull
        //@ts-ignore
        matador={<ClassMatador />} />
    </div>
  )
}

export default App
