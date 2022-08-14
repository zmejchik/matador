import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ArenaWithBull from './components/ArenaWithBull'
import { TestMatador } from './components/TestMatador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <ArenaWithBull
        //@ts-ignore
        matador={<TestMatador />} />
    </div>
  )
}

export default App
