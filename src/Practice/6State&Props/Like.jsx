import { useState } from "react"
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Like = () =>{
    const [liked, setLiked] = useState(false)
    const [message, setMessage] = useState("")
    const handleLike = () =>{
        setLiked(!liked)
        if(liked === true){
            setMessage("Unlike")
        }
        else{
            setMessage("Liked")
        }
    }

    return(
        <>
            <div className="text-9xl flex justify-center">
                {liked ? <AiFillHeart color="red" onClick={handleLike}/> : <AiOutlineHeart color="red" onClick={handleLike}/>}    
                <p>{message}</p>
            </div>
        </>
    )
}

export default Like