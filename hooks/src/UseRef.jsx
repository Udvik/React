import {useRef} from 'react'

function UseRef(){
    const userref = useRef(null)

    const handleFocus = () => {
        userref.current.focus()
    };
    return (
        <div>
            <input ref={userref} type="text" placeholder='Enter you name' />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default UseRef;