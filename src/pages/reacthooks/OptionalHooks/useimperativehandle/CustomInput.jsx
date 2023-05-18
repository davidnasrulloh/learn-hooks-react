import React, { useImperativeHandle } from "react"

function CustomInput({ style, ...props }, ref) {
    useImperativeHandle(ref, () => {
        return { alertHi: () => alert(`Hi ini adalah focus input : ${props.value}`) }
    }, [props.value])
    return (
        <input {...props}
            style={{
                border: "none",
                backgroundColor: "lightpink",
                padding: ".25em",
                borderBottom: ".1em solid black",
                borderTopRightRadius: ".25em",
                borderTopLeftRadius: ".25em",
                ...style,
            }} className="mb-4" />
    )
}

export default React.forwardRef(CustomInput)