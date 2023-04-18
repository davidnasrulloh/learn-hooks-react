import React, { useReducer, useState } from "react";
import Header from "../../components/Header";

// Reducer = Function yang buanyak di dalam satu function

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo"
}

function reducerCount(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

function reducerTodos(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todos
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

// todo component
const Todo = ({ todo, dispatch2 }) => {
    return (
        <div className="flex gap-4 justify-center items-center mb-2">
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick={() => dispatch2({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })} className="py-2 px-8 bg-green-600 text-white rounded-lg">Toggle</button>
            <button onClick={() => dispatch2({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} className="py-2 px-8 bg-red-700 text-white rounded-lg">Delete</button>
        </div>
    )
}

const UseReducerLearning = () => {
    // count reducer
    const [state, dispatch1] = useReducer(reducerCount, {
        count: 0
    });

    function increment() {
        dispatch1({ type: ACTIONS.INCREMENT })
    }

    function decrement() {
        dispatch1({ type: ACTIONS.DECREMENT })
    }

    // todos reducer
    const [todos, dispatch2] = useReducer(reducerTodos, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch2({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    console.log(todos);

    return (
        <div>
            <Header title="Belajar Use Reducer" />
            <div className="text-3xl flex gap-12 justify-center my-8">
                <button onClick={decrement} className="py-2 px-12 bg-green-600 text-white rounded-xl border-4 border-green-800 border-opacity-50 shadow-xl hover:translate-y-2 hover:transition hover:bg-green-200 hover:text-green-700" >-</button>
                <span className="flex items-center">{state.count}</span>
                <button onClick={increment} className="py-2 px-12 bg-green-600 text-white rounded-xl border-4 border-green-800 border-opacity-50 shadow-xl hover:translate-y-2 hover:transition hover:bg-green-200 hover:text-green-700">+</button>
            </div>
            <div className="pb-8">
                <form onSubmit={handleSubmit} className="flex items-center my-4">
                    <div className="relative w-full">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis disini" />
                    </div>
                </form>
                {todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} dispatch2={dispatch2} />
                })}
            </div>
        </div>
    );
}

export default UseReducerLearning;