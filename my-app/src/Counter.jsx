import {useState,useEffect} from "react";

function Counter(){
    const [count , setCount] = useState(0);

    useEffect(() => {
        console.log(`Timer changed to ${count}`)
    },[count])

    return <div>
        <h1>Count : {count}</h1>
        <button onClick = {() => setCount(count+1)}>Increment</button>
    </div>
}

export default Counter;