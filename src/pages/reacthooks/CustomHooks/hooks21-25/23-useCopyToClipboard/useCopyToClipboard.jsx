import copy from "copy-to-clipboard";
import { useState } from "react";

export default function useCopyToClipboard() {
    const [value, setValue] = useState()
    const [success, setSuccess] = useState()

    const copyToClipboard = (text, option) => {
        const result = copy(text, option)
        if (result) setValue(text)
        setSuccess(result)
    }

    return [copyToClipboard, { value, success, setSuccess }]
} 