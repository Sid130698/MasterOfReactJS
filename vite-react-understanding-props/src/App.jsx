import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    userName : "Siddharth",
    age: 22
  }
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-md p-4 mb-4'>Tailwind test</h1>
      <Card userName="Siddharth" btnText="Yo click to open"/>
      <Card userName="Singh" btnText="open this"/>

    </>
  )
}

export default App
  