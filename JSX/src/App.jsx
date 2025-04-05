import './App.css'
import Greeting from './Greeting';

function App() {
  const name = "Udvik";
  return (
    <>
      <h1>I am {name}</h1>
      <p>This is JSX implementation</p>
      <Greeting name1="Udvik"/>
    </>
  )
}

export default App
