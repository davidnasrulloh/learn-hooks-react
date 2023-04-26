import { useEffect, useState } from "react";
import useUpdateEffect from "./useUpdateEffect";



const UpdateEffectComponent = () => {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    // useEffect(() => {
    //     alert(count)
    // }, [count])

    return (
        <div>
            <div className="my-2 text-lg">{count}</div>
            <button onClick={() => setCount(c => c + 1)} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">Increment</button>
        </div>
    )
}

export default UpdateEffectComponent;