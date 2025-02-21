import { useState } from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/UserContextProvider'

import './App.css'

function App() {


  return (
      <UserContextProvider>
        <h1>React with chai and share is important</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
  )
}

export default App
