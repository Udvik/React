import Header from "./Header";
import Greeting from "./Greeting"
import Counter from "./Counter"
import CounterEffect from "./CounterEffect";

function App() {
  return <div>
    <h1>Hello World</h1>
    {/* This is a single-line comment */}
    <Header /> 
    <Greeting name="Udvik"/>
    <CounterEffect/>
  </div>
}

export default App
