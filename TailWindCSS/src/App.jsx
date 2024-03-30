import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-100% bg-black p-8">
        <h1 className='text-white text-center pt-4 text-4xl'>Tail Wind</h1>
        <Card></Card>
      </div>
    </>
  )
}

export default App
