import {useRef, useState} from "react"

const Ref = () =>{
    const inputRef = useRef()
    const [haha, setHaha] = useState("")

    const handleFocus = () =>{
        setHaha(inputRef.current.value)
    }

    const [count, setCount] = useState(0)
    const timeContainer = useRef(null)

    const handleStart = () =>{
        if(timeContainer.current === null){
            timeContainer.current = setInterval(() =>{
                setCount(prev => prev + 1)
            }, 1000)
        }
    }
    const handlePause = () =>{
        clearInterval(timeContainer.current)
        timeContainer.current = null
    }
    const handleReset = () =>{
        clearInterval(timeContainer.current)
        timeContainer.current = null
        setCount(0)
    }
    return(
        <>
            <div>
                <div className="space-x-3">
                    <input ref={inputRef} name="firstName" placeholder="First Name" className="border rounded-lg p-2"/>

                    <button className="border rounded-lg p-2" onClick={handleFocus}>Submit</button>
                    <p>{haha}</p>
                </div>
            </div>

            <div>
                <p>Count: {count}</p>

                <div>
                    <button className="border rounded-lg p-2" onClick={handleStart}>Start</button>
                    <button className="border rounded-lg p-2" onClick={handlePause}>Pause</button>
                    <button className="border rounded-lg p-2" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Ref