import React, { useDebugValue, useState } from "react";
import Header from "../../../../components/Header";

const UseDebugValue = () => {

    const [firstName, setFirstName] = useState("David");
    const [lastName, setLastName] = useState("Nasrulloh")

    useDebugValue(firstName, lastName);

    return (
        <>
            <Header title="Belajar Use Debug Value" />
            <div>
                <form className="flex items-center my-4">
                    <div className="w-1/5">First : </div>
                    <div className="relative w-full">
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                    </div>
                </form>
                <form className="flex items-center my-4">
                    <div className="w-1/5">Last : </div>
                    <div className="relative w-full">
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                    </div>
                </form>
            </div>
            <div className="w-full text-2xl font-bold">{firstName} {lastName}</div>
        </>
    )
}

export default UseDebugValue;