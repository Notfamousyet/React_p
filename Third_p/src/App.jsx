import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>Talwind test
      </h1>
      <Card username='shreya' btnText="visit for more"/>
      <Card username='hello' btnText="Visit to follow"/>
    </>
  )
}

export default App
