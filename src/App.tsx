import './App.css'
import ArenaWithBull from './components/ArenaWithBull'
import FunctionalMatador from './components/FunctionalMatador'
import { SimpleMatador } from './components/SimpleMatador'

function App() {
  return (
    <div className="App">
      <ArenaWithBull
        matador={<FunctionalMatador />} />
    </div>
  )
}

export default App
