import { useRef } from "react";
import useHover from "./useHover";


export default function HoverComponent() {
    const elementRef = useRef()
    const hovered = useHover(elementRef)

    return (
        <div className="flex justify-center">
            <div
                className="my-2"
                ref={elementRef}
                style={{
                    backgroundColor: hovered ? "blue" : "red",
                    width: "100px",
                    height: "100px",
                    position: "",
                }}
            />
        </div>
    )
}