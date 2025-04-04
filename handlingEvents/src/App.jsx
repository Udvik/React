import { useState } from 'react'

import './App.css'

function App() {
  const [message, setmessage] = useState("hello")
  const [name,setName] = useState("")

  function greetme(name){
    const newMsg = "Hello "+name;
    setmessage(newMsg);
    alert(newMsg)
  }

  return (
    <>
      <h3>{message}</h3>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => greetme(name)}>GreetMe</button>
    </>
  )
}

export default App
