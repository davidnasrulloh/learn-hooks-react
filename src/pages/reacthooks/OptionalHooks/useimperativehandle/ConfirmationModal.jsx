import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const ConfirmationModal = ({ open, onClose }, ref) => {
    const [value, setValue] = useState("saat ini masih kosong")

    const closeRef = useRef();
    const denyRef = useRef();
    const confirmRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            focusCloseButton: () => closeRef.current.focus() || alert("Alert : Close"),
            focusDenyButton: () => denyRef.current.focus() || alert("Alert : Deny"),
            focusConfirmButton: () => confirmRef.current.focus() || alert("Alert : Confirm"),
            lihatHasilClick: () => alert(`Hai :  ${value}`),
        }
    })

    const clickButtonClose = (e) => {
        onClose(), setValue(e.target.value)
    }

    if (!open) return null

    return (
        <div ref={ref} className="flex justify-center">
            <div className="my-12 mx-12 py-12 px-12 border-2 rounded-lg w-1/2">
                <button ref={closeRef} onClick={clickButtonClose} value="memilih close" className="text-3xl w-12 h-12 mb-4 rounded-md hover:bg-red-600 hover:text-white " >&times;</button>
                <h1 className="text-3xl my-4">Title</h1>
                <div>
                    <button ref={confirmRef} value="memilih confirm" onClick={clickButtonClose} className="bg-green-700 py-2 px-12 mx-4 text-white">Confirm</button>
                    <button ref={denyRef} value="memilih deny" onClick={clickButtonClose} className="bg-red-700 py-2 px-12 mx-4 text-white">Deny</button>
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(ConfirmationModal);