import React from "react";
import Header from '../../../../components/Header';
import Title from "../../../../components/Tittle";
import ToggleComponent from "./1-useToggle/ToggleComponent";
import TimeoutComponent from "./2-useTimeout/TimeoutComponent";
import DebounceComponent from "./3-useDebounce/DebounceComponent";
import UpdateEffectComponent from "./4-useUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./5-useArray/ArrayComponent";


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
            <div>
                <Title title={"useDebounce"} />
                <DebounceComponent />
            </div>
            <div>
                <Title title={"useUpdateEffect"} />
                <UpdateEffectComponent />
            </div>
            <div>
                <Title title={"useArray"} />
                <ArrayComponent />
            </div>
        </>
    )
}

export default Hooks1_5;