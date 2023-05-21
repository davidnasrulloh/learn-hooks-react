import { useState, useRef, useEffect } from "react";
import useClickOutside from './useClickOutside';

const ClickOutsideComponent = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("David")
    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        // e.preventDefault()
        if (open) {
            setOpen(false)
        }
        console.log(`ini adalah open click : ${open}`)

    })

    // const handleChangeOpen = (e) => {
    //     e.preventDefault()
    //     setOpen(true)
    // }

    console.log(open)

    return (
        <>
            <div>{name}</div>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => setName("Nasrulloh")}>Change To Nasrulloh</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => setName("David")}>Change To David</button>
            <button
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition"
                onClick={() => setOpen(true)}>Open</button>
            <div
                ref={modalRef}
                style={{
                    display: open ? "block" : "none",
                    backgroundColor: "blue",
                    color: "white",
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    top: "calc(50% - 50px)",
                    left: "calc(50% - 50px)",
                }}>
                <span>Modal</span>
            </div>
        </>
    )
}

export default ClickOutsideComponent;