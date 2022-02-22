import { useReducer } from "react";
const initialState = {count: 0};
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error();
    }
}
export default function UseReducer(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <h1>This is USEREDUCER</h1>
           <div>Count: {state.count}</div>
            <button onClick={()=> dispatch({type:'decrement'})}>-</button>
            <button onClick={()=> dispatch({type:'increment'})}>+</button>
        </div>
    )
}