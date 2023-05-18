import React, { useId } from "react";
import Header from './../../../components/Header';

const EmailForm = () => {

    const id = useId()

    return (
        <>
            <div className="py-2 px-8 border-2 rounded-lg flex gap-4 justify-start mb-4">
                <label htmlFor={`${id}-email`}>Email dengan id {id}</label>
                <input id={`${id}-email`} type="email" name="email" className="focus:outline-none" />
            </div>
            <div className="py-2 px-8 border-2 rounded-lg flex gap-4 justify-start">
                <label htmlFor={`${id}-name`}>Name dengan id {id}</label>
                <input id={`${id}-name`} type="email" name="email" className="focus:outline-none" />
            </div>
        </>
    )
}


const UseId = () => {
    return (
        <>
            <Header title={"Belajar Use Id"} className="mb-4" />
            <div className="w-2/3 mx-auto">
                <EmailForm />
                <article style={{ marginBlock: '1rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nobis odio ab inventore rem praesentium eius omnis. Possimus hic corporis, a sunt accusamus beatae, porro consequatur esse explicabo perspiciatis expedita?
                </article>
                <EmailForm />
            </div>

        </>
    )
}

export default UseId;