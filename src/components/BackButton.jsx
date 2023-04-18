import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from './../../node_modules/react-icons/bi/index.esm';

const BackButton = () => {
    return (
        <>
            <Link to="/">
                <div className='my-4 bg-green-700 py-2 w-full text-white flex justify-center gap-4 px-32 items-center'>
                    <span className="text-xl"><BiArrowBack /></span> back home
                </div>
            </Link>
        </>
    )
}

export default BackButton