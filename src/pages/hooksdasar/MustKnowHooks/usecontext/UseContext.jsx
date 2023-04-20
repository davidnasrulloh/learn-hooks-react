import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";
import Header from "../../../../components/Header";

const UseContextLearning = () => {
    return (
        <>
            <ThemeProvider>
                <Header title="Belajar Use Context" />
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeProvider>
        </>
    );
}

export default UseContextLearning;