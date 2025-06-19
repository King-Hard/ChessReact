import { useState } from "react"

const ToDo = () =>{
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const [message, setMessage] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(task){
            setTaskList([...taskList, task])
            setTask("")
        }
        else{
            setMessage("Task must be not empty!")
            setTimeout(() =>{
                setMessage("")
            }, 2500)
        }
    }

    return(
        <>
            
            <div className="flex justify-center min-h-screen items-center bg-gray-200">
                <div className="border rounded-lg bg-white w-100 p-7">
                    <h1 className="text-center text-xl font-semibold mb-5">Task App</h1>
                    <form onSubmit={handleSubmit} className="mb-5">
                        <div>
                            <input onChange={(e) => setTask(e.target.value)} value={task} className="border rounded-lg p-3 w-full font-semibold placeholder:font-semibold" type="text" placeholder="Task Here"/>
                            {message ? <p className="text-red-600">{message}</p> : null}
                            <button className="mt-5 border rounded-lg p-3 w-full bg-green-600" type="submit">Add Task</button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center text-lg font-semibold">Task List</p>
                        <ul>
                            {taskList.map((t, index) =>(
                                <li key={index}><span className="font-semibold">{`Task number ${index + 1}: `}</span>{`${t}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default ToDo