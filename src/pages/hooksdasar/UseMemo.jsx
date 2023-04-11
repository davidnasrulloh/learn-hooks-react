import React, { useEffect, useMemo, useState } from "react";

function slowFunction(num) {
    console.log("calling slow function");
    for (let i = 0; i <= 1000000; i++) { }
    return num * 2;
}

const UseMemoLearnings = () => {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log("Theme Changed")
    }, [themeStyle])

    return (
        <>
            <div>
                <form className="flex items-center my-4">
                    <div class="relative w-full">
                        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                    </div>
                </form>
                <button onClick={() => setDark(prevDark => !prevDark)} className="py-2 px-12 bg-green-700 text-white hover:bg-green-600 transition">Change Theme</button>
                <div className="my-4 py-4 text-white text-3xl" style={themeStyle}>{number}</div>
            </div>
        </>
    );
}

export default UseMemoLearnings;