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
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}