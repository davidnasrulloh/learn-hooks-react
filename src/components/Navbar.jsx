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
                        <Link to="/use-debugvalue" className="hover:text-blue-400">UseDebugValue</Link>
                        <Link to="/use-imperativehandle" className="hover:text-blue-400">UseImperativeHandle</Link>
                        <Link to="/use-id" className="hover:text-blue-400">UseId</Link>
                    </div>
                </div>
                <div className="font-medium text-start">
                    <div className="font-bold mb-4">Custom Hooks</div>
                    <div className="flex flex-col gap-2">
                        <Link to="/use-HTCCustomHooks" className="hover:text-blue-400 border-b-2 pb-3">How to Create Custom Hooks</Link>
                        <Link to="/use-custom1-5" className="hover:text-blue-400 border-b-2 pb-3" >Custom Hooks #1-5 : <br /> useToggle, useTimeout, useDebounce, useUpdateEffect, useArray</Link>
                        <Link to="/use-custom6-10" className="hover:text-blue-400 border-b-2 pb-3" >Custom Hooks #6-10 :  <br /> usePrevious, useStateWithHistory, useStorage, useAsync, useFetch</Link>
                        <Link to="/use-custom11-15" className="hover:text-blue-400 border-b-2 pb-3" >Custom Hooks #11-15 : useScript, useDeepCompareEffect, useEventListener, useOnScreen, useWindowSize</Link>
                        <Link to="/use-custom16-20" className="hover:text-blue-400 border-b-2 pb-3" >Custom Hooks #16-20 : useMediaQuery, useGeolocation, useStateWithValidation, useSize, useEffectOnce</Link>
                        <Link >Custom Hooks #21-25 : -</Link>
                        <Link >Custom Hooks #26-30 : -</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;