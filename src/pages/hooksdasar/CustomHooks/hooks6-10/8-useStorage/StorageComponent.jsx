import { useLocalStorage, useSessionStorage } from "./useStorage";


export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage("name", "David")
    const [age, setAge, removeAge] = useLocalStorage("age", 22)

    return (
        <>
            <div className="my-2 text-lg">{name} - {age}</div>
            <button
                onClick={() => setName(prompt("Masukkan nama mu ? "))}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Set Name
            </button>
            <button
                onClick={() => setAge(prompt("Masukkan umut mu ? "))}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Set Age
            </button>
            <button
                onClick={removeName}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Remove Name
            </button>
            <button
                onClick={removeAge}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Remove Age
            </button>
        </>
    )
}