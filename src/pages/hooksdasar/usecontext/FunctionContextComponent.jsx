import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";


const FunctionContextComponent = () => {

    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button className="my-4 py-2 px-8 border-2 bg-green-300 border-green-700 rounded-xl hover:bg-green-500 transition-all hover:text-white" onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </>
    );
}

export default FunctionContextComponent;