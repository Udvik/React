import {useState, useContext} from 'react';
import { UserContext } from './UserContext';


function Counter(){
    const [count, setCount] = useState(0);
    const userData = useContext(UserContext);

    function increase(){
        setCount(prevCount => prevCount+1);
    }

    function decrease(){
        setCount(prevCount => prevCount-1);
    }


    return (
        <div>
            <p>Name : {userData.name}</p>
            <p>Age : {userData.age}</p>
            <p>Count: {count}</p>
            
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    )

}

export default Counter;