import { useRef } from "react";
import useLongPress from "./useLongPress";


export default function LongPressComponent() {
    const elementRef = useRef()
    useLongPress(elementRef, () => alert("Ini long press"), { delay: 1000 })

    return (
        <div className="flex justify-center">
            <div
                className="my-2"
                ref={elementRef}
                style={{
                    backgroundColor: "red",
                    width: "100px",
                    height: "100px",
                    position: "",
                }}
            />
        </div>
    )
}