import { useRef } from "react"
import useSize from "./useSize"


export default function SizeComponent() {
    const refTextArea = useRef()
    const size = useSize(refTextArea)

    return (
        <>
            <div>
                {JSON.stringify(size)}
            </div>
            <textarea
                ref={refTextArea}
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2" placeholder="Write for anything..."
                name=""
                id=""
                cols="30"
                rows="10"></textarea>
        </>
    )
}