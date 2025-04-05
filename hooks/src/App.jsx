import Counter from './Counter'
import './App.css'
import ReducerDemo from './ReducerDemo'
import UseRef from './UseRef'

import { UserContext } from './UserContext'

function App() {
  const userData = {name : "Udvik",age:"20"}
  return (
    <>
    <UserContext.Provider value={userData}>
    <Counter />
    </UserContext.Provider>
    <ReducerDemo></ReducerDemo>
    <UseRef></UseRef>
    </>
  )
}

export default App
