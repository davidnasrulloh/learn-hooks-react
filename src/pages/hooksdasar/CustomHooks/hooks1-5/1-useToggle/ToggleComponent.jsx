import React from "react";
import useToggle from "./useToggle";

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)
    return (
        <div>
            <div className="my-2 text-lg">{value.toString()}</div>
            <button onClick={toggleValue} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">Toggle</button>
            <button onClick={() => toggleValue(true)} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">Make True</button>
            <button onClick={() => toggleValue(false)} className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition" >Make False</button>
        </div>
    )
}