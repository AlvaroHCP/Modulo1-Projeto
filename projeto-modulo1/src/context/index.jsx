import { createContext } from "react"
import { useState } from "react"

const AppContext = createContext()

function AppProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }