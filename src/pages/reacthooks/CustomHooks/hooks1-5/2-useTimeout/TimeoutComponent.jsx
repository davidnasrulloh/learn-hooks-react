import React, { useState } from "react";
import useTimeout from "./useTimeout";

const TimeoutComponent = () => {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(0), 1000)

    return (
        <div>
            <div className="my-2 text-lg">{count}</div>
            <button onClick={() => setCount(c => c + 1)} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">Increment</button>
            <button onClick={clear} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">Clear Timeout</button>
            <button onClick={reset} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition" >Reset Timeout</button>
        </div>
    )
}

export default TimeoutComponent;