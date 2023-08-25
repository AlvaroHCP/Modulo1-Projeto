import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


let darkMode = false
const modeDarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})


function LightDarkTheme({ children }) {
    return (
        <ThemeProvider theme={darkMode == true && modeDarkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )

}

export { LightDarkTheme }