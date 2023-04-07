import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="w-full py-2 my-8 bg-blue-600 text-white">
                Menu
            </div>
            <div className="flex gap-12">
                <div className="font-medium text-start">
                    <div className="font-bold">Must Now Hooks</div>
                    <div className="flex flex-col gap4">
                        <Link to="/use-state">UseState</Link>
                        <Link>UseEffect</Link>
                        <Link>UseContext</Link>
                    </div>
                </div>
                <div className="font-medium text-start">
                    <div className="font-bold">Lesser Used Hooks</div>
                    <div className="flex flex-col gap4">
                        <Link>UseRef</Link>
                        <Link>UseMemo</Link>
                        <Link>UseCallback</Link>
                        <Link>UseReducer</Link>
                        <Link>UseTransition</Link>
                        <Link>UseDefferedValue</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;