import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { AppContext } from '../../context/DarkMode';
import { useContext } from 'react';


// let darkMode = false
const modeDarkTheme = (dark) => createTheme({
    palette: {
        mode: dark,
    },
})


function LightDarkTheme({ children }) {
    // const { darkMode, setDarkMode } = useContext(AppProvider)
    const { darkMode } = useContext(AppContext)

    const themeMode = modeDarkTheme(darkMode === true ? 'dark' : 'light')

    return (

        <ThemeProvider theme={themeMode}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    )

}

export { LightDarkTheme }