import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes'

import { LightDarkTheme } from './components/LightDarkTheme'


import { AppProvider } from './context/DarkMode'

function App() {

  return (

    <AppProvider>
      <LightDarkTheme>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </LightDarkTheme>
    </AppProvider>

  )
}

export default App
