import React, { useDeferredValue, useEffect, useMemo, useState } from "react";


const List = ({ input }) => {

    const LIST_SIZE = 2000
    const defferedValue = useDeferredValue(input)
    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{defferedValue}</div>)
        }
        return l
    }, [defferedValue])

    useEffect(() => {
        console.log(`input: ${input} \n Deffered value: ${defferedValue}`)
    }, [input, defferedValue])

    return list;
}

const UseDefferedValueLearning = () => {

    const [input, setInput] = useState()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <div className="text-2xl text-green-600 font-medium">
                Belajar Use Deffered Value
            </div>
            <form className="flex items-center my-4">
                <div className="relative w-full">
                    <input type="text" value={input} onChange={handleChange} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                </div>
            </form>
            <List input={input} />
        </>
    )
}

export default UseDefferedValueLearning;