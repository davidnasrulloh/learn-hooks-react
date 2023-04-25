import React from "react";
import Header from '../../../../components/Header';
import Title from "../../../../components/Tittle";
import ToggleComponent from "./1-useToggle/ToggleComponent";
import TimeoutComponent from "./2-useTimeout/TimeoutComponent";


const Hooks1_5 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 1 -5"} />
            <div>
                <Title title={"useToggle"} />
                <ToggleComponent />
            </div>
            <div>
                <Title title={"useTimeout"} />
                <TimeoutComponent />
            </div>
        </>
    )
}

export default Hooks1_5;