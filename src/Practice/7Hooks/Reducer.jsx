import {useReducer} from 'react'

//first step gawa ng initializeState laman neto is yung mga variable na gagamitin natin mamaya
const initialState = {
    username: "",
    email: "",
    password: "",
    loading: false,
    error: null,
    submitted: false 
}

//second step heto na yung maghahandle sa reducer natin and then sa initialState
const Reducer = (state, action) =>{
    switch(action.type){
        case "setField":
            return{...state, [action.field]: action.value}
        case "submit":
            return{...state, loading: true, error: null}
        case "success":
            return{...state, loading: false, submitted: true}
        case "error":
            return{...state, loading: false, error: action.payload}
    }
}

// Third dito na tayo magdi-dispatch ng mga handle natin para sa ipangtatawag natin papunta sa Reducer natin.

const ReactReducer = () =>{
    const [state, dispatch] = useReducer(Reducer, initialState)

    const handleChange = (event) =>{
        dispatch({type: "setField",
            field: event.target.name,
            value: event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch({type: "submit"})

        setTimeout(() =>{
            if(state.username && state.email && state.password){
                dispatch({type: "success"})
            }
            else{
                dispatch({type: "error", payload: "Please fill all fileds"})
            }
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="UserName"
                onChange={handleChange}
                name="username"
                value={state.username}
                className="border rounded-lg p-2"/>

                <input type="email" placeholder="EmailAddress"
                onChange={handleChange}
                name="email"
                value={state.email}
                className="border rounded-lg p-2"/>

                <input type="password" placeholder="Password"
                onChange={handleChange}
                name="password"
                value={state.paswword}
                className="border rounded-lg p-2"/>

                <button className="border rounded-lg p-2" type="submit">{state.loading ? "Submitting..." : "Submit"}</button>

                {state.error && <p className="text-center text-red-500 text-xl font-semibold">{state.error}</p>}
                {state.submitted && <p className="text-center text-green-500 text-xl font-semibold">Submitted Successfully!</p>}
            </form>
        </>
    )
}

export default ReactReducer

// Yung double and natin && na sa conditional rendering is ang ginagawa nito yung variable daw natin nato is ididisplay nya to kung may laman lang yung variable natin pero kung wala di nya ididisplay, pag kase wala to kakain lang ng sentence line sa ui natin makakaapekto pa sa design natin pag nag render na.