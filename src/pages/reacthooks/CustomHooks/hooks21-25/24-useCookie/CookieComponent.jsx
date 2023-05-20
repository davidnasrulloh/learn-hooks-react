import useCookies from "./useCookie";


export default function CoookieComponent() {
    const [name, updateName, removeName] = useCookies("name", "David")
    const [umur, updateUmur, removeUmur] = useCookies("umur", 22)

    return (
        <>
            <div className="text-xl font-semibold my-4">
                <div>{name}</div>
                <div>{umur}</div>
            </div>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => updateName("Nasrulloh")}>Change Name To Nasrulloh</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={removeName}>Delete Name</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => updateUmur(prompt("Masukkan umur mu ? "))}>Change Name To New Umur</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={removeUmur}>Delete Umur</button>
        </>
    )
}