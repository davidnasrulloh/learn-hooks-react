import React from "react";
import Header from '../../../../components/Header';
import Title from "../../../../components/Tittle";
import PreviousComponent from "./1-usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./2-useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./3-useStorage/StorageComponent";



const Hooks6_10 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 6 - 10"} />
            <div>
                <Title title={"usePrevious"} />
                <PreviousComponent />
            </div>
            <div>
                <Title title={"useStateWithHistory"} />
                <StateWithHistoryComponent />
            </div>
            <div>
                <Title title={"useStorage"} />
                <StorageComponent />
            </div>
        </>
    )
}

export default Hooks6_10;