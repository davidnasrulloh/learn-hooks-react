import { useEffect, useState } from "react";
import useEffectOnce from "./useEffectOnce";


export default function EffectOnceComponent() {
    const [count, setCount] = useState(0)

    useEffectOnce(() => alert("Hai"))

    // useEffect(() => {
    //     alert("Ini use effect di dalem")
    // }, [])

    return (
        <>
            <div>{count}</div>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition my-2"
                onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}