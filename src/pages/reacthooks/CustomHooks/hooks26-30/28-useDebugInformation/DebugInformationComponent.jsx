import { useState } from "react";
import useToggle from "../../hooks1-5/1-useToggle/useToggle";
import useDebugInformation from "./useDebugInformation";


export default function DebugInformationComponent() {
    const [boolean, toggle] = useToggle(false)
    const [count, setCount] = useState(0)

    return (
        <>
            <ChildComponent boolean={boolean} count={count} />
            <div className="py-3">
                <button
                    className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                    onClick={toggle}>Toggle</button>
                <button
                    className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                    onClick={() => setCount(prevCount => prevCount + 1)}>
                    Increment
                </button>
            </div>
        </>
    )
}

function ChildComponent(props) {
    const info = useDebugInformation("ChildComponent", props)

    return (
        <>
            <div>{props.boolean.toString()}</div>
            <div>{props.count}</div>
            <div>{JSON.stringify(info, null, 2)}</div>
        </>
    )
}