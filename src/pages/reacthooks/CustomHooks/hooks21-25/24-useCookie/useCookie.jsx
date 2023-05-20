import Cookies from "js-cookie";
import { useCallback, useState } from "react";


export default function useCookies(name, defaultValue) {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if (cookie) return cookie
        Cookies.set(name, defaultValue)
        return defaultValue
    })

    const updateCookie = useCallback(
        (newValue, option) => {
            Cookies.set(name, newValue, option)
            setValue(newValue)
        },
        [name]
    )

    const deleteCookie = useCallback(() => {
        Cookies.remove(name)
        setValue(null)
    }, [name])

    return [value, updateCookie, deleteCookie]
};