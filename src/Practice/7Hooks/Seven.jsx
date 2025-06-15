import {useEffect, useRef, useState} from "react"

const Seven = () =>{
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")

    useEffect(() =>{
        setMessage(`Updated: ${count}`)
    }, [count])


    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setTodos(data))
    }, [])
    
    return(
        <>
            <div>
                <p>Count : {count}</p>
                <p>{message}</p>
                <button className="border p-5" onClick={() => setCount(count + 1)}>Increment</button>
            </div>

            <div>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Seven

