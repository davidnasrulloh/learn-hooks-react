import React, { useCallback, useState } from "react";
import List from "./List";
import Header from "../../../../components/Header";

const UseCallBackLearning = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
    }, [number])

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    return (
        <>
            <Header title="Belajar Use Callback" />
            <div style={theme} className="p-4">
                <form className="flex items-center my-4">
                    <div class="relative w-full">
                        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                    </div>
                </form>
                <button onClick={() => setDark(prevDark => !prevDark)} className="py-2 px-12 bg-green-700 text-white hover:bg-green-600 transition">Change Theme</button>
                <List getItems={getItems} />
            </div>
        </>
    );
}

export default UseCallBackLearning;