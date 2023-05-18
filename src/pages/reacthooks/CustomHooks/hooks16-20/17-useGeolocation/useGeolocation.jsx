import { useEffect, useState } from "react"


export default function useGeolocation(option) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [data, setData] = useState({})

    useEffect(() => {
        const successHandler = e => {
            setLoading(false)
            setError(null)
            setData(e.coords)
        }
        const errorHandler = e => {
            setError(e)
            setLoading(false)
        }
        navigator.geolocation.getCurrentPosition(
            successHandler,
            errorHandler,
            option
        )
        const id = navigator.geolocation.watchPosition(
            successHandler,
            errorHandler,
            option
        )
        return () => navigator.geolocation.clearWatch(id)
    }, [option])

    return { loading, error, data }
}