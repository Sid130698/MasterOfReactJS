import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Input from './components/Input'

function App() {
  const [amount, setAmount] = useState(0)
  const countryDetails = useCurrencyInfo("USD");
  return (
    <>
      <div className='flex flex-col items-center mt-64'>
        <Input label="To" countries={Object.keys(countryDetails)}/>
        <Input label="From" countries={Object.keys(countryDetails)}/>
      </div>
    </>
  )
}

export default App
