import {TextField, Button} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"

const Five = () =>{
    const [password, setPassword] = useState("")
    const handleSubmit = (event) =>{
        event.preventDefault()
        setPassword(`Password: ${event.target.elements.pass.value}`)
    }

    return(
        <>
        
            <div className="m-5">
                <form onSubmit={handleSubmit}>
                    <TextField name="pass" label="Password" variant="outlined" sx={{width: "300px"}}/>

                    <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{m: 2, mt: 1}}>Send</Button>

                    <p className="border rounded-lg p-3">{password}</p>
                </form> 
            </div>

        </>
    )
}

export default Five