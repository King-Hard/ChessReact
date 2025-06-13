import { useState } from "react"

const Six = () =>{
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")
    const [cities, setCities] = useState(["Manila", "Cebu", "Pasig"])
    const [checked, setChecked] = useState(false)

    const handleIncrement = () =>{
        if(count < 10){
            setCount(count + 1)
            setMessage("")
        }
        else{
            setMessage(<p className="text-green-600">Maximum Reached!</p>)
        }
    }

    const handleDecrement = () =>{
        if(count > 0){
            setCount(count - 1)
            setMessage("")
        }
        else{
            setMessage(<p className="text-red-600">Minimum Reached!</p>)
        }
    }

    const handleChange = () =>{
        setChecked(!checked)
    }
    
    return(
        <>
        
            <div>
                <div className="space-y-5 space-x-2">
                    <p className="border rounded-lg p-2">Count: {count}</p>

                    <button className="border rounded-lg p-2 bg-green-300 hover:bg-green-500" onClick={handleIncrement}>Increment</button>
                    <button className="border rounded-lg p-2 bg-red-300 hover:bg-red-500" onClick={handleDecrement}>Decrement</button>

                    <p className="font-medium text-lg text-center">{message}</p>
                </div>

            </div>

            <div className="mt-5 flex">
                <div className="space-x-3">
                    <input placeholder="City" className="border rounded-lg p-2"/>
                    <button className="border rounded-lg p-2">Add city</button>

                    <label>Show cities: </label>
                    <input type="checkbox" onChange={handleChange}/>
                </div>
            </div>

            <div>
                {checked && cities.map((city, index) => (
                    <ul key={index}>
                        <li>{city}</li>
                    </ul> 
                ))}
            </div>

            <div>
                
            </div>
        
        </>
    )
}

export default Six