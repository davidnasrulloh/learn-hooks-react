import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";


function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()

    return savedValue
}

// complex custom hoooks
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue];
}

// simple custom hooks
const useUpdateLogger = (value) => {
    useEffect(() => {
        console.log(value)
    }, [value])
}

const HTCCustomHooks = () => {
    const [name, setName] = useLocalStorage('name', '')
    useUpdateLogger(name)
    return (
        <>
            <Header title={"Belajar How to Create Custom Hooks"} />
            <form className="flex items-center my-4">
                <div className="relative w-full">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                </div>
            </form>
        </>
    )
}

export default HTCCustomHooks;