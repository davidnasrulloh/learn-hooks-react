import { useState } from "react";
import usePrevious from "./usePrevious";


const PreviousComponent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("David")
    const previousCount = usePrevious(count)

    return (
        <>
            <div className="my-2 text-lg">{count} - {previousCount}</div>
            <div className="my-2 text-lg">{name}</div>
            <button
                onClick={() => setCount(currentCount => currentCount + 1)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Increment
            </button>
            <button
                onClick={() => setName("Nasrulloh")}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Change Name
            </button>
        </>
    )
}

export default PreviousComponent;