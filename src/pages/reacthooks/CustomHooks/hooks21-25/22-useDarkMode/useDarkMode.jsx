
import { useEffect } from 'react';
import useMediaQuery from './../../hooks16-20/16-useMediaQuery/useMediaQuery';
import { useLocalStorage } from './../../hooks6-10/8-useStorage/useStorage';

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
    const preferencesDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const enabled = darkMode ?? preferencesDarkMode

    useEffect(() => {
        document.body.classList.toggle("dark-mode", enabled)
    }, [enabled])

    return [enabled, setDarkMode]
}