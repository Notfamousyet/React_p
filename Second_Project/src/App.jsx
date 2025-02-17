import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(15)
  const addValue=() =>{
    setCounter(counter+ 1)
    console.log("value added",counter)
  }
  const subValue=() =>{
    setCounter(counter - 1)
    console.log("Value subtracted",counter)

  }
  return (

    <>
      <h1>code on react</h1>
      <h2>Count value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>remove value</button>
    </>
  )
}

export default App
