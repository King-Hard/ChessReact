import { useState } from "react"
import SixComponent from "./SixComponent"
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import Like from './Like'

const Six = () =>{
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count + 1)
    }
    
    const handleDecrement = () =>{
        setCount(count + 1)
    }

    const [liked, setLiked] = useState(false)
    const handleLike = () =>{
        setLiked(!liked)
    }

    const [message, setMessage] = useState("")

    const handleMessage = () =>{
        setMessage()
    }
    return(
        <>
        
            <SixComponent 
            count={count} 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement}
            />

            <div className="text-9xl flex justify-center">
                <Like />
                {liked ? <AiFillHeart color="red" onClick={handleLike}/> : <AiOutlineHeart color="red" onClick={handleLike}/>}    

            </div>
         
        </>
    )
}

export default Six