import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increase(){
    setCount(count => count + 1);
  }
  function decrease(){
    setCount(count => count-1);
  }

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </>
  )
}

export default App
