import React from "react";
import Header from '../../../../components/Header';
import Title from "../../../../components/Tittle";
import PreviousComponent from "./6-usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./7-useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./8-useStorage/StorageComponent";
import AsyncComponent from "./9-useAsync/AsyncComponent";
import FetchComponent from "./10-useFetch/FetchComponent";

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
            <div>
                <Title title={"useAsync"} />
                <AsyncComponent />
            </div>
            <div>
                <Title title={"useFetch"} />
                <FetchComponent />
            </div>
        </>
    )
}

export default Hooks6_10;