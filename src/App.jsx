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
      <div className='my-4 bg-green-700 py-2 w-full text-white'>
        <Link to="/">back home</Link>
      </div>
      <div className='font-bold text-3xl'> David Nasrulloh</div>
      <SetupRouters />
    </div>
  )
}

export default App
