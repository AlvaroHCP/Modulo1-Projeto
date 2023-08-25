import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes'

import { LightDarkTheme } from './components/LightDarkTheme'

function App() {

  return (
    <>
      <LightDarkTheme>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </LightDarkTheme>
    </>
  )
}

export default App
