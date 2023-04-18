import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from './../../node_modules/react-icons/hi/index.esm';

const Navbar = () => {
    return (
        <div>
            <div className="w-full py-2 my-8 bg-blue-600 text-white flex gap-4 px-4 items-center">
                <span className="text-xl"><HiMenu /> </span> Menu
            </div>
            <div className="flex gap-12 text-gray-700">
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
                        <Link to="/use-memo" className="hover:text-blue-400">UseMemo</Link>
                        <Link to="/use-callback" className="hover:text-blue-400">UseCallback</Link>
                        <Link to="/use-reducer" className="hover:text-blue-400">UseReducer</Link>
                        <Link to="/use-transition" className="hover:text-blue-400">UseTransition</Link>
                        <Link to="/use-deffered" className="hover:text-blue-400">UseDefferedValue</Link>
                    </div>
                </div>
                <div className="font-medium text-start">
                    <div className="font-bold mb-4">Optional Hooks</div>
                    <div className="flex flex-col gap-2">
                        <Link to="/use-layouteffect" className="hover:text-blue-400">UseLayoutEffect</Link>
                        <Link>UseDebugValue</Link>
                        <Link>UseImperativeHandle</Link>
                        <Link>UseId</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;