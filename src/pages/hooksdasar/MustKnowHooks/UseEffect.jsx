import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";

const UseEffectLearning = () => {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            <Header title="Belajar Use Effect" />
            <div className="w-full px-12">
                <div className="mb-8 py-3 w-full border-b-2">
                    <h3 className="font-semibold text-blue-500 text-xl">
                        Lebar windows : {windowWidth}
                    </h3>
                </div>
                <div className="my-4">
                    <button onClick={() => setResourceType('posts')} className="mx-4 py-1 px-8 border-2 border-green-600 hover:bg-green-600 rounded-md bg-slate-100 transition delay-75 hover:text-white">Posts</button>
                    <button onClick={() => setResourceType('users')} className="mx-4 py-1 px-8 border-2 border-green-600 hover:bg-green-600 rounded-md bg-slate-100 transition delay-75 hover:text-white">Users</button>
                    <button onClick={() => setResourceType('comments')} className="mx-4 py-1 px-8 border-2 border-green-600 hover:bg-green-600 rounded-md bg-slate-100 transition delay-75 hover:text-white">Comments</button>
                </div>
                <h1 className="text-4xl text-green-700 my-3">{resourceType}</h1>
                {
                    resourceType === "posts"
                        ?
                        items.map((item) => {
                            return (
                                <div>{item.id} {item.title}</div>

                            )
                        })
                        :
                        ""
                }
                {
                    resourceType === "comments" || resourceType === "users"
                        ?
                        items.map((item) => {
                            return (
                                <div>{item.id} {item.name}</div>
                            )
                        })
                        :
                        ""
                }

            </div>
        </>
    );
}

export default UseEffectLearning;