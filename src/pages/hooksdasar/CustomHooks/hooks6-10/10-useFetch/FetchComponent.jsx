import { useState } from "react"
import useFetch from "./useFetch"


export default function FetchComponent() {
    const [id, setId] = useState(1)
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {},
        [id]
    )

    return (
        <>
            <div className="my-2 text-lg">{id}</div>
            <button
                onClick={() => setId(currentId => currentId + 1)}
                className="py-2 px-12 bg-green-700 mx-4 text-white hover:bg-green-600 transition">
                Increment Id
            </button>
            <div className="my-2 text-lg">Loading : {loading.toString()}</div>
            <div className="my-2 text-lg">{JSON.stringify(error, null, 2)}</div>
            <div className="my-2 text-lg">{JSON.stringify(value, null, 2)}</div>
        </>
    )
}