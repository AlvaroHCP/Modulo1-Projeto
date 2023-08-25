import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { AppContext } from '../../context';
import { useContext } from 'react';


// let darkMode = false
const modeDarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})


function LightDarkTheme({ children }) {
    // const { darkMode, setDarkMode } = useContext(AppProvider)
    const context = useContext(AppContext)
    const { darkMode, setDarkMode } = context
    setDarkMode(false)

    return (

        <ThemeProvider theme={darkMode == true && modeDarkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    )

}

export { LightDarkTheme }