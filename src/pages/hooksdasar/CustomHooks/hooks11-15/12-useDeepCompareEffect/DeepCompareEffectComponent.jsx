import { useEffect, useRef, useState } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

const DeepCompareEffectComponent = () => {
    const [age, setAge] = useState(0)
    const [otherCount, setOtherCount] = useState(0)
    const useEffectCountRef = useRef()
    const useDeepCompareEffectCountRef = useRef()

    const person = { age: age, name: "David" }

    useEffect(() => {
        useEffectCountRef.current.textContent =
            parseInt(useEffectCountRef.current.textContent) + 1
    }, [person])

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent =
            parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
    }, [person])

    return (
        <div>
            <div>
                UseEffect : <span ref={useEffectCountRef}>0</span>
            </div>
            <div>
                useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
            </div>
            <div>Other Count: {otherCount}</div>
            <div>{JSON.stringify(person)}</div>
            <div className="my-3">
                <button
                    className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                    onClick={() => setAge(currentAge => currentAge + 1)}>
                    Increment Age
                </button>
                <button
                    className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                    onClick={() => setOtherCount(currentAge => currentAge + 1)}>
                    Increment Other Count
                </button>
            </div>
        </div>
    )
}

export default DeepCompareEffectComponent