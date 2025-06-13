import { useState } from "react"
import SixComponent from "./SixComponent"

const Six = () =>{
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    
    const handleDecrement = () =>{
        setCount(count + 1)
    }

    return(
        <>
        
            <SixComponent 
            count={count} 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement}
            />
         
        </>
    )
}

export default Six