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
                    <div className="font-bold mb-4">Must Now Hooks</div>
                    <div className="flex flex-col gap-2">
                        <Link to="/use-state" className="hover:text-blue-400">UseState</Link>
                        <Link to="/use-effect" className="hover:text-blue-400">UseEffect</Link>
                        <Link to="/use-context" className="hover:text-blue-400">UseContext</Link>
                    </div>
                </div>
                <div className="font-medium text-start">
                    <div className="font-bold mb-4">Lesser Used Hooks</div>
                    <div className="flex flex-col gap-2">
                        <Link to="/use-ref" className="hover:text-blue-400">UseRef</Link>
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