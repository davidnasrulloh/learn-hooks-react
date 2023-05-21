import Header from "../../../../components/Header"
import Title from "../../../../components/Tittle"
import OnlineStatusComponent from "./26-useOnlineStatus/OnlineStatusComponent"
import RenderCountComponent from "./27-useRenderCount/RenderCountComponent"
import DebugInformationComponent from "./28-useDebugInformation/DebugInformationComponent"
import HoverComponent from "./29-useHover/HoverComponent"
import LongPressComponent from "./30-useLongPress/LongPressComponent"


const Hooks26_30 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 26 - 30"} />
            <div>
                <Title title={"useOnlineStatus"} />
                <OnlineStatusComponent />
            </div>
            <div>
                <Title title={"useRenderCount"} />
                <RenderCountComponent />
            </div>
            <div>
                <Title title={"useDebugInformation"} />
                <DebugInformationComponent />
            </div>
            <div>
                <Title title={"useHover"} />
                <HoverComponent />
            </div>
            <div>
                <Title title={"useLongPress"} />
                <LongPressComponent />
            </div>
        </>
    )
}

export default Hooks26_30