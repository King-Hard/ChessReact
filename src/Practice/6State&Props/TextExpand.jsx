import { useState } from "react"
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";


const TextExpand = ({children, maxChars}) =>{
    const [showText, setShowText] = useState(false)
    const text = showText ? children : children.substring(0, maxChars)

    return(
        <>
            <p className="text-2xl font-medium">{text}</p>
            <button className="border rounded-lg p-3" onClick={() => setShowText(!showText)}>{showText ? <div className="flex"><AiOutlineCaretUp/>Less</div> : <div className="flex"><AiOutlineCaretDown/>More</div>}</button>
        </>
    )
}

export default TextExpand