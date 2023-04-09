import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";

const UseContextLearning = () => {
    return (
        <>
            <ThemeProvider>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeProvider>
        </>
    );
}

export default UseContextLearning;