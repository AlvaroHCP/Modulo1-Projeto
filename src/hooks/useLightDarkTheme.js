import { AppContext } from '../context/DarkMode';
import { useContext } from 'react';


function useLightDarkTheme() {
    // const context = useContext(AppContext)
    const { darkMode, setDarkMode } = useContext(AppContext)

    function setMode(newValue) {
        setDarkMode(newValue)
    }

    // console.log(darkMode)

    return {
        darkMode,
        setDarkMode: setMode
    }
}

export { useLightDarkTheme }