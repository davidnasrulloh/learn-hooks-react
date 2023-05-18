import React, { useState, useTransition } from "react";
import Header from "../../../components/Header";

const UseTransitionLearning = () => {

    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const LIST_SIZE = 2000

    function handleChange(e) {
        setInput(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <Header title="Belajar Use Transition" />
            <form className="flex items-center my-4">
                <div className="relative w-full">
                    <input type="text" value={input} onChange={handleChange} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                </div>
            </form>
            {
                isPending
                    ?
                    "Loading..."
                    :
                    list.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
            }
        </>
    )
}

export default UseTransitionLearning;