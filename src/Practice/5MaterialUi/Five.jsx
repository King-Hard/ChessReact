import {TextField, Button, Typography, AppBar, Toolbar, Alert} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { useState } from "react"

const Five = () =>{
    const [password, setPassword] = useState("")
    const handleSubmit = (event) =>{
        event.preventDefault()
        setPassword(`Password: ${event.target.elements.pass.value}`)
    }

    const [notif, setNotif] = useState()
    const handleNotif = () =>{
        setNotif(<Alert variant="filled" severity="info">
                    This is a filled error Alert.
                </Alert>)
    }
    return(
        <>
        
            <button onClick={handleNotif} className="border rounded-lg p-3 bg-red-300 hover:bg-red-500">Delete</button>

            <div>
                {notif}
            </div>

            <div className="m-5">
                <form onSubmit={handleSubmit}>
                    <TextField name="pass" label="Password" variant="outlined" sx={{width: "300px"}}/>

                    <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{m: 2, mt: 1}}>Send</Button>

                    <p className="border rounded-lg p-3">{password}</p>
                </form> 

                <Typography variant="h1">Welcome!</Typography>

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4">My App</Typography>
                    </Toolbar>
                </AppBar>
            </div>

        </>
    )
}

export default Five