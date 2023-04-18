import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../../components/Header";

// sudah dijalankan sebelum di render
const UseLayoutEffect = () => {

    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()

    // sudah dijalankan sebelum di render
    useLayoutEffect(() => {
        if (popup.current == null || button.current.null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    }, [show])

    return (
        <>
            <Header title="Belajar Use Layout Effect" />
            <button ref={button} onClick={() => setShow(prevState => !prevState)} className="py-2 px-8 bg-green-600 border-4 border-green-800 text-white rounded-xl hover:bg-green-800"> Click Here </button >
            {
                show && (
                    <div ref={popup} style={{ position: "absolute" }}>
                        This is popup
                    </div>
                )
            }
        </>
    )
}

export default UseLayoutEffect;