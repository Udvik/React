import {useState,useEffect} from "react";

function CounterEffect(){
    const [count , setCount] = useState(0);
    const [isPaused, setisPaused] = useState(false);

    useEffect(()=>{

        if (isPaused) return;


        console.log("Interval Created")
        const interval = setInterval(()=>{
            setCount(prevCount =>prevCount + 1);
            
        },1000);

        
    return () => {
        clearInterval(interval);
    }
        
    },[isPaused]);

    

    

    return <div>
        <h2>Count : {count}</h2>
        <button onClick={() => {setCount(0)}}>Reset</button>
        <button onClick={() => {setisPaused(prev => !prev)}}>{isPaused == true?"Resume":"Pause"}</button>
    </div>
}

export default CounterEffect;