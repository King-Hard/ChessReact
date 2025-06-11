import { useState } from "react"

const Four = () =>{
    const [click, setClick] = useState("")
    const handleClick = () =>{
        setClick("Hello World")
    }

    const [change, setChange] = useState("")
    const handleChange = (event) =>{
        setChange(event.target.value)
    }

    const [submit, setSubmit] = useState("")
    const handleSubmit = (event) =>{
        event.preventDefault()
        setSubmit(`First Name: ${event.target.elements.fName.value} | Last Name: ${event.target.elements.lName.value}`)
    }

    return(
        <>
            <div>
                <button onClick={handleClick} className="border rounded-lg p-3 bg-green-300 hover:bg-green-500">Click Me!</button>
                <p>{click}</p>
            </div>

            <div>
                <input onChange={handleChange} type="text" placeholder="Type anyting you want" className="border rounded-lg p-3"/>
                <p>{change}</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input name="fName" type="text" placeholder="Type anyting you want" className="border rounded-lg p-3"/>
                    <input name="lName" type="text" placeholder="Type anyting you want" className="border rounded-lg p-3"/>

                    <button type="submit" className="border rounded-lg p-2">
                        Submit
                    </button>
                </form>

                <p>{submit}</p>
            </div>
        </>
    )

}

export default Four