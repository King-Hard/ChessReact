import {useEffect, useReducer, useRef, useState} from "react"

const initialState = {count: 0}
/* Dito heto yung 1st step, need natin i-initialize yung mga main variable na gagamitin natin para sa reducer na gagawin natin
example:
const intializeState = {
    count: 0,
    message: ""
}
*/

const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return{count: state.count + 1}
        case "decrement":
            return{count: state.count - 1}
        case "reset":
            return{count: 0}
        default:
            return state
    }
}

/* Dito naman heto yung 2nd step, need natin dito ng reducer na may handle na state and action. Kumabaga yung state natin is sya yung pinaka main variable para sa reducer natin parang sa usestate lang meron tayong main variable and then yung 2nd variable para sa conditionala na gagawin. So ayun nga sa baba gamit lang tayo ng switch and then ibababa na natin yung action lalagay lang tayo ng .type ngayon sa baba lagay tayo ng case pwede numbers and string then colon lang tayo tapos retun sa baba and then curly braces tapos doon gawin na natin yung magigigng function para sa variable natin na nakalagay sa initilizeState natin
*/


const Seven = () =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleIncrement = () =>{
        dispatch({type : "increment"})
    }
    const handleDeccrement = () =>{
        dispatch({type: "decrement"})
    }
    const handleReset = () =>{
        dispatch({type: "reset"})
    }
    return(
       <>
            <div>
                <p>Count: {state.count}</p>

                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDeccrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
       </>
    )
}

export default Seven

