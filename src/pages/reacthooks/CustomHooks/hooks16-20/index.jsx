import Header from "../../../../components/Header"
import Title from "../../../../components/Tittle"
import MediaQueryComponent from "./16-useMediaQuery/MediaQueryComponent"
import GeolocationComponent from "./17-useGeolocation/GeolocationComponent"
import StateWithValidationComponent from "./18-useStateWithValidation/StateWithValidationComponent"
import SizeComponent from "./19-useSize/SizeComponent"
import EffectOnceComponent from "./20-useEffectOnce/EffectOnceComponent"

const Hooks16_20 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 16 - 20"} />
            <div>
                <Title title={"useMediaQuery"} />
                <MediaQueryComponent />
            </div>
            <div>
                <Title title={"useGeoLocation"} />
                <GeolocationComponent />
            </div>
            <div>
                <Title title={"useStateWithValidation"} />
                <StateWithValidationComponent />
            </div>
            <div>
                <Title title={"useSize"} />
                <SizeComponent />
            </div>
            <div>
                <Title title={"useEffectOne"} />
                <EffectOnceComponent />
            </div>

        </>
    )
}

export default Hooks16_20