import Header from "../../../../components/Header";
import Title from "../../../../components/Tittle";
import ScriptComponent from "./11-useScript/ScriptComponent";
import DeepCompareEffectComponent from "./12-useDeepCompareEffect/DeepCompareEffectComponent";
import EventListenerComponent from "./13-useEventListener/EventListenerComponent";
import OnScreenComponentComponent from "./14-useOnScreen/OnScreenComponent";
import WindowSizeComponent from "./15-useWindowSize/WindowSizeComponent";

const Hooks11_15 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 11 - 15"} />
            <div>
                <Title title={"useScript"} />
                <ScriptComponent />
            </div>
            <div>
                <Title title={"useDeepCompareEffect"} />
                <DeepCompareEffectComponent />
            </div>
            <div>
                <Title title={"useEventListener"} />
                <EventListenerComponent />
            </div>
            <div>
                <Title title={"useOnScreen"} />
                <OnScreenComponentComponent />
            </div>

            <div>
                <Title title={"useWindowSize"} />
                <WindowSizeComponent />
            </div>

        </>
    )
}

export default Hooks11_15;