import React, { useState } from "react"

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
            <div className="font-semibold text-5xl my-12 flex gap-12 items-center justify-center">
                <button onClick={decrementCount}>-</button>
                <span>{count} {theme}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <div className="font-semibold text-5xl my-12 flex gap-12 items-center justify-center">
                <button onClick={decrementCount2}>-</button>
                <span>{count2} {theme2}</span>
                <button onClick={incrementCount2}>+</button>
            </div>
        </div>
    )
}

export default UseStateLearning;