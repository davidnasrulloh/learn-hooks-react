import React, { useEffect, useRef, useState } from "react";

const UseRefLearning = () => {

    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef('');

    function focus() {
        inputRef.current.focus()
        inputRef.current.value = 'Some value';
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        prevName.current = name
    }, [name])

    return (
        <>
            <div>
                <form className="flex items-center my-4">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis nama mu disini" />
                    </div>
                </form>
                <div className="text-3xl">My name is {name} and it used to be {prevName.current}</div>
                <div className=" my-4">I rendered {renderCount.current} times</div>
                <button onClick={focus} className="py-2 px-12 bg-green-700 text-white hover:bg-green-600 transition">Fokus</button>
            </div>
        </>
    );
}

export default UseRefLearning;