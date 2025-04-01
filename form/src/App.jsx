import FormComponent from './FormComponent'
import DisplayList from './DisplayList'
import './App.css'

function App() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
  ];
  return (
    <>
      {/*<FormComponent/>*/}
      {users.map(user => (
        <DisplayList key={user.id} user={user}/>
      ))}
    </>
  )
}

export default App
