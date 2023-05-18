import { useCallback, useEffect, useState } from "react";


export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => { })

    useEffect(() => {

    }, [])

    const remove = useCallback(() => {

    }, [])

    return [value, setValue, remove]
} 