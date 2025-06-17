import { useReducer } from "react"

const initialState = {
    username: "",
    email: "",
    password: "",
    loading: false,
    error: null,
    submitted: false
}

const Reducer = (state, action) => {
    switch(action.type){
        case "setField":
            return { ...state, [action.field]: action.value }
        case "submit":
            return { ...state, loading: true, error: null }
        case "success":
            return { ...state, loading: false, submitted: true }
        case "error":
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const PracticeReducer = () => {
    const [state, dispatch] = useReducer(Reducer, initialState) // ✅ ayusin yung order

    const handleChange = (event) => {
        dispatch({
            type: "setField",
            field: event.target.name,
            value: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: "submit" })

        setTimeout(() => {
            if(state.username && state.email && state.password){
                dispatch({ type: "success" }) // ✅ spelling fix
            } else {
                dispatch({ type: "error", payload: "Please fill all textfields" })
            }
        }, 1500)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-10">
                <input name="username" value={state.username} type="text" placeholder="Username" className="border rounded-lg p-2" onChange={handleChange} />
                <input name="email" value={state.email} type="text" placeholder="Email Address" className="border rounded-lg p-2" onChange={handleChange} />
                <input name="password" value={state.password} type="password" placeholder="Password" className="border rounded-lg p-2" onChange={handleChange} />

                <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">
                    {state.loading ? "Submitting..." : "Submit"}
                </button>

                {state.error && <p className="text-red-500 text-center text-xl font-semibold">{state.error}</p>}
                {state.submitted && <p className="text-green-500 text-center text-xl font-semibold">Submitted Successfully!</p>}
            </form>
        </>
    )
}

export default PracticeReducer
