import { useEffect } from "react"
import "./body.css"
import useDarkMode from "./useDarkMode"

export default function DarkModeComponent() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <button
            onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
            className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
            style={{
                // border: `1px solid ${darkMode ? "white" : "black"}`,
                // background: "none",
                color: darkMode ? "white" : "white",
            }}
        >
            Toggle Dark Mode
        </button>
    )
}