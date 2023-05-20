import Header from "../../../../components/Header"
import Title from "../../../../components/Tittle"
import ClickOutsideComponent from "./21-useClickOutside/ClickOutsideComponent"
import DarkModeComponent from "./22-useDarkMode/DarkModeComponent"
import CoookieComponent from "./24-useCookie/CookieComponent"
import TranslationComponent from "./25-useTranslation/TranslationComponent"

const Hooks21_25 = () => {
    return (
        <>
            <Header title={"Belajar Custom Hooks 21 - 25"} />
            <div>
                <Title title={"useClickOutside"} />
                <ClickOutsideComponent />
            </div>
            <div>
                <Title title={"useDarkMode"} />
                <DarkModeComponent />
            </div>
            <div>
                <Title title={"useCookie"} />
                <CoookieComponent />
            </div>
            <div>
                <Title title={"useTranslation"} />
                <TranslationComponent />
            </div>
        </>
    )
}

export default Hooks21_25