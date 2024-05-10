import {useState} from  'react'
import FootingBar from './components/FootingBar'

function App() {
  let [color,setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
  <FootingBar setColor={setColor}/>
    </div>
    
  )
}

export default App
