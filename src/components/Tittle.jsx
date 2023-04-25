import React from "react";

const Title = ({ title }) => {
    return (
        <div className="mt-3 mb-1 text-blue-500">
            <div className="font-bold text-2xl"> Sesi : {title}</div>
        </div>
    )
}

export default Title;