import { useState } from "react";
import useCopyToClipboard from "./useCopyToClipboard";


export default function CopyToClipBoardComponent() {
    const [copyToClipBoard, { success, setSuccess }] = useCopyToClipboard()
    const [text, setText] = useState("Ini adalah isi dari input")

    console.log(text)

    const handleChange = (e) => {
        setSuccess(false)
        setText(e.target.value)
    }

    return (
        <>
            <button onClick={() => copyToClipBoard(text)}>{success ? "Copied" : "Copy Text"}</button>
            <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2" placeholder="Write for anything..."
                type="text"
                defaultValue={text}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}