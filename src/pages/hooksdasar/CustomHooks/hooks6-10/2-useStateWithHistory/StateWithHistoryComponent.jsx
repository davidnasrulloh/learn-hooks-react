import { useState } from "react";
import useStateWithHistory from "./useStateWithHistory";


const StateWithHistoryComponent = () => {
    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
    const [name, setName] = useState("Nasrulloh");

    return (
        <>
            <div className="my-2 text-lg">{count}</div>
            <div className="my-2 text-lg">{history.join(", ")}</div>
            <div className="my-2 text-lg">Pointer - {pointer + 1}</div>
            <div className="my-2 text-lg">{name}</div>
            <form className="flex items-center my-4">
                <div className="w-1/5">First : </div>
                <div className="relative w-full">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                </div>
            </form>
            <button
                onClick={() => setCount(currentCount => currentCount * 2)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Double
            </button>
            <button
                onClick={() => setCount(currentCount => currentCount + 1)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Increment
            </button>
            <button
                onClick={back}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Back
            </button>
            <button
                onClick={forward}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Forward
            </button>
            <button
                onClick={() => go(2)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Go To Pointer 3
            </button>
            <button
                onClick={() => go(4)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Go To Pointer 5
            </button>
            <button
                onClick={() => setName("David")}
                className="py-2 px-12 my-2 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Change Name to David
            </button>
        </>
    )
}

export default StateWithHistoryComponent;