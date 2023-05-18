import React, { useRef, useState } from "react";
import Header from "../../../../components/Header";
import CustomInput from "./CustomInput";
import ConfirmationModal from "./ConfirmationModal";

const UseImperativeHandle = () => {
    const classButton = "mx-4 py-1 px-8 border-2 border-green-600 hover:bg-green-600 rounded-md bg-slate-100 transition delay-75 hover:text-white"
    const [value, setValue] = useState("red")
    const inputRef = useRef()

    // complex
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

    return (
        <>
            <Header title="Belajar Use Imperative Handle" />
            <CustomInput ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
            <br />
            <button onClick={() => inputRef.current.alertHi()} className="mx-4 py-1 px-8 border-2 border-green-600 hover:bg-green-600 rounded-md bg-slate-100 transition delay-75 hover:text-white" >Focus</button >

            {/* complex */}
            <div className="mt-12">
                <button onClick={() => setOpen(true)} className={classButton}>Open</button>
                <button onClick={() => modalRef.current.focusCloseButton()} className={classButton}>Focus Close Btn</button>
                <button onClick={() => modalRef.current.focusConfirmButton()} className={classButton}>Focus Confirm Btn</button>
                <button onClick={() => modalRef.current.focusDenyButton()} className={classButton}>Focus Deny Btn</button>
                <div className="my-4">
                    <button onClick={() => modalRef.current.lihatHasilClick()} className={`w-2/3 ${classButton}`}>Lihat hasil click</button>
                </div>
                <ConfirmationModal
                    ref={modalRef}
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </div>
        </>
    )
}

export default UseImperativeHandle;