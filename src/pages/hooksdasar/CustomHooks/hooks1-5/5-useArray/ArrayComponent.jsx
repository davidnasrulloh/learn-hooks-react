import useArray from "./useArray";



const ArrayComponent = () => {

    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])


    return (
        <div>
            <div className="my-2 text-lg">{array.join(", ")}</div>
            <button
                onClick={() => push(7)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Add 7
            </button>
            <button
                onClick={() => update(1, 9)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Change Second Element to 9
            </button>
            <button
                onClick={() => remove(1)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Remove Second Element
            </button>
            <button
                onClick={() => filter(n => n <= 3)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Keep number less than 4
            </button>
            <div className="my-3">
                <button
                    onClick={() => set([1, 2])}
                    className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                    Set To 1, 2
                </button>
                <button
                    onClick={clear}
                    className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                    Clear
                </button>
            </div>
        </div>
    )
}

export default ArrayComponent;