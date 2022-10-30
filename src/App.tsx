import './App.css'
import ArenaWithBull from './components/ArenaWithBull'
import FunctionalMatador from './components/FunctionalMatador'

function App() {
  return (
    <div className="App">
      <ArenaWithBull
        matador={<FunctionalMatador />} />
    </div>
  )
}

export default App
