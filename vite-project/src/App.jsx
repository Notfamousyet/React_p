import { useState,useCallback,useEffect,useRef} from 'react'
// import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowded,setNumberAllowded]=useState(false);
  const[charAllowded,setCharAllowded]=useState(false);
  const[password,setPassword]=useState("")
  const passwordRef=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowded) str+="0123456789"
    if(charAllowded) str+="!@#$%^&*()_+-={}[]|:;'<>,.?/~"
    for (let i = 1; i <=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowded,charAllowded,setPassword])
  useEffect(()=>{passwordgenerator()},[length,numberAllowded,charAllowded,passwordgenerator])
  return (

     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-6 py-3
      text-orange-500 bg-gray-800 text-center '>
      <h1 className='text-white text-center my-3 '>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-3 bg-white ' >
        <input type="text" 
          value={password}
          className='outline-none w-full px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none  py-1 bg-blue-700 text-white px-3 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-3'>
          <input type="range" 
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label > Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-3'>
          <input type="checkbox" 
            defaultChecked={numberAllowded}
            id='numberInput'
            onChange={()=>{
              setNumberAllowded((prev)=>!prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-3'>
            <input type="checkbox"
              defaultChecked={charAllowded}
              id='characterInput'
              onChange={()=>{
                setCharAllowded((prev)=>!prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div> 
    

  )
}

export default App
