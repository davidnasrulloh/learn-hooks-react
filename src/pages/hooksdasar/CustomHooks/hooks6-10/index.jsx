import React from "react";
import Header from '../../../../components/Header';
import Title from "../../../../components/Tittle";
import PreviousComponent from "./1-usePrevious/PreviousComponent";



const Hooks6_10 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 6 - 10"} />
            <div>
                <Title title={"usePrevious"} />
                <PreviousComponent />
            </div>
        </>
    )
}

export default Hooks6_10;