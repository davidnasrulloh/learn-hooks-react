import React, { useState } from "react";
import Header from "../../../components/Header";

// function countInitial() {
//     console.log("run function")
//     return 0
// }

const UseStateLearning = () => {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('green');

    // const [count, setCount] = useState(() => {
    //     console.log("run function")
    //     return 0
    // });

    // const [count, setCount] = useState(countInitial());

    // const [count, setCount] = useState(() => countInitial());

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
        setTheme('red')
    }

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
        setTheme('blue');
    }


    // ini bentuk kedua
    const [state, setState] = useState({ count2: 4, theme2: 'blue' })
    const count2 = state.count2
    const theme2 = state.theme2

    const decrementCount2 = () => {
        setState(prevState => {
            return { ...prevState, count2: prevState.count2 - 1 }
        });
    }


    const incrementCount2 = () => {
        setState(prevState => {
            return { ...prevState, count2: prevState.count2 + 1 }
        });
    }


    return (
        <div>
            <Header title="Belajar Use State" />
            <div className="font-semibold text-5xl my-12 flex gap-12 items-center justify-center">
                <button onClick={decrementCount} className="py-2 px-12 bg-green-600 text-white rounded-xl border-4 border-green-800 border-opacity-50 shadow-xl hover:translate-y-2 hover:transition hover:bg-green-200 hover:text-green-700" >-</button>
                <span className="w-1/3">{count} {theme}</span>
                <button onClick={incrementCount} className="py-2 px-12 bg-green-600 text-white rounded-xl border-4 border-green-800 border-opacity-50 shadow-xl hover:translate-y-2 hover:transition hover:bg-green-200 hover:text-green-700">+</button>
            </div>
            <div className="font-semibold text-5xl my-12 flex gap-12 items-center justify-center">
                <button onClick={decrementCount2} className="py-2 px-12 bg-green-600 text-white rounded-xl border-4 border-green-800 border-opacity-50 shadow-xl hover:translate-y-2 hover:transition hover:bg-green-200 hover:text-green-700">-</button>
                <span className="w-1/3">{count2} {theme2}</span>
                <button onClick={incrementCount2} className="py-2 px-12 bg-green-600 text-white rounded-xl border-4 border-green-800 border-opacity-50 shadow-xl hover:translate-y-2 hover:transition hover:bg-green-200 hover:text-green-700">+</button>
            </div>
        </div>
    )
}

export default UseStateLearning;