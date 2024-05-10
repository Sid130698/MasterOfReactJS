import { useState } from "react";


function App() {
  let [myCounter,changeMyCounter]=useState(15)
  let counter = 5;
  const addValue =() =>{
    console.log("value added",counter);
    counter++;
    changeMyCounter(myCounter++)
    // let counter_value = document.getElementById("counter_value");
    // counter_value.innerHTML = `Counter value: ${counter}`;
  }
  function removeValue() {
    if(myCounter>=0)
    changeMyCounter(myCounter--);
  }
  return (
    <>
      <h1>
        Counter app
      </h1>
      <h2 id="counter_value"> Counter value : {myCounter}</h2>
      <button onClick = {addValue} id="addButton">Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
