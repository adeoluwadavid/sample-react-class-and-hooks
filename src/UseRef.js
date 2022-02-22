import {useState, useEffect, useRef} from 'react'
export default function UseRef(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const inputElement=useRef()
    const focusInput = ()=>{
        inputElement.current.focus();
    }
    useEffect(()=>{
        count.current = count.current + 1;
    },[inputValue])
    return(
        <div>
            <h1>This is USEREF</h1>
            <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>

            <div>Second UseRef</div>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}