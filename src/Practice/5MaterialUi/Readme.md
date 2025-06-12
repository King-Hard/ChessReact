# Styling Components

1, Sa paglagay ng icon need lang natin ng:
import SendIcon from "@mui/icons-material/Send"

Meron tayong position kung left or right natin ilalagay yung icon:
startIcon={<DeleteIcon />}
endIcon={<SendIcon />}

<Button startIcon={<SendIcon />}> Send</Button>

2, Sa paglagay ng mga components:
import Button from "@mui/material"

Meron tayong position kung left or right natin ilalagay yung icon:
startIcon={<DeleteIcon />}
endIcon={<SendIcon />}

<Button startIcon={<SendIcon />}> Send</Button>

3, Kung layout, position lang naman need natin na baguhin don sa material component na inimport natin is okay na yung sx={{p:2, m:2}} lang pero kung yung mismong desgin ng material component is need na natin ng sx={{root something, para mabago yung mismong design}}