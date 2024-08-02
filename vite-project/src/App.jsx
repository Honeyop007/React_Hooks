import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//usestate is a hook that pass a var and a fun in out case we hold var as a count and function as a setcount the set count every time set value of  count

let [count,setcount]= useState(0);

function App() {
  
  const addval = ()=>{
   setcount(count++)
    }
    const remval = ()=>{
      setcount(count--)
      }


  return (
    <>
<h1>Honey Op</h1>
<h2>Counter value: {count}</h2>

<button onClick={addval}>Enter Value:{count} </button>
<br /><br />
<button onClick={remval}>Remove Value:{count} </button>
<p>The counter is {count} </p>
    </>
  )
}

export default App
