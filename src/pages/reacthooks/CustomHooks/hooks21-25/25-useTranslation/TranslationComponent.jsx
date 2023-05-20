import useTranslation from "./useTranslation";

export default function TranslationComponent() {
    const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

    return (
        <>
            <div>{language}</div>
            <div>{t("hi")}</div>
            <div>{t("bye")}</div>
            <div>{t("nested.value")}</div>

            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => setLanguage("sp")}>Change To Spanish</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => setLanguage("en")}>Change To English</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
        </>
    )
}