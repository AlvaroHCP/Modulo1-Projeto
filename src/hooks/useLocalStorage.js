import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const result = localStorage.getItem(key)
    const initial = result ? JSON.parse(result) : initialValue

    // const []
    const [value, setValue] = useState(initial)
    const [storage, setStorage] = useState(initial)

    const updateValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue)
    }

    const favouriteUpdate = (newValue) => {
        // setStorage()
        return
    }

    return {
        value,
        setValue: updateValue,
        storage,
        setStorage: favouriteUpdate

    }

}

export { useLocalStorage }