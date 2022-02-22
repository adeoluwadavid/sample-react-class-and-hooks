import {useState, useEffect } from 'react'
function UseEffect(){
    const [ count, setCount ] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(()=>{
        setCalculation(() => {
           return  count * 2
        })
    },[count])
    return(
        <div>
            <br />
            <br />
            <br />
            <h1>This is USE EFFECT</h1>
            <h1>I have rendered {count} times!</h1>
            <p>Count: {count}</p>
            <button onClick={()=> setCount((c)=>{
                return c+1
            } )}>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    )
} 
export default UseEffect