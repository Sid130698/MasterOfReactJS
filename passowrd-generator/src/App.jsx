import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordBox from './components/PasswordBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PasswordBox/>
    </>
  )
}

export default App
