import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import SetupRouters from './routers'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to="/">
        <div className='my-4 bg-green-700 py-2 w-full text-white'>
          back home
        </div>
      </Link>
      <div className='font-bold text-3xl'> David Nasrulloh</div>
      <div className='flex justify-center'>
        <hr className='border-2 my-3 w-1/2' />
      </div>
      <SetupRouters />
    </div>
  )
}

export default App
