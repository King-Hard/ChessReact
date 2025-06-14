# State and Props

1, State - useState natin is sya yung ginagamit natin to manage dynamic data. Like pwede natin to gamitin pang pop-up ng design ganon or kahit san pa man basta magre-return tayo ng changes maganda to na gamitin.

2, Props - Yung props natin is meron tayong 2 files 1 for main, then 1 for functions. Kumbaga ipapasa-pasa lang natin yung function na nagawa natin don sa 2nd file to main file. Kumbaga pagpapaikli ng code.

Kung gagawin natin to yung component natin ang iro-route natin then yung magiging child natin is yung main file.


Like logic - 

import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from 'react'

const Six = () =>{
    const [liked, setLiked] = useState(false)
    const handleLike = () =>{
        setLiked(!liked)
    }
    return(
        <>
        
            <div className="text-9xl">
                {liked ? <AiFillHeart color="red" onClick={handleLike} /> : <AiOutlineHeart color="red" onClick={handleLike} />}
            </div>

        </>
    )
}

export default Six

Dito meron tayong 2 icons. 1 for fill, and 1 for outline. Ngayon gumawa lang tayo ng const [liked, setLiked] = useState(false) bakit false kase mamaya may ilalagay tayo na onClick don sa loob ng mga button natin na kapag-clinick is magiging false so lalabas outline natin then click ulit lalabas naman yung fill natin. Kunin lang natin yung liked natin na may lamang false then mag internary consdition tayo kung true lilitaw yung fill natin and kung false lilitaw yung outline natin since naka false sya so ang lilitaw is yung naka outline. Ngayon lagyan natin ng onClick yung 2 icons natin, and then lagyan lang natin sila ng onClick na may lamang handleLike. So after that sa loob ng handleLike tawagin lang natin yung setLiked natin then i-set natin sya as !liked it means kada click daw ni user kung ano yung current na laman ng liked natin is mababaligtad since naka false sya pagpinindot natin is magigigng true ngayon yung laman nya, kaya lalabas yung filled icon natin. Kung clinick ulit ni user since naka true laman nya mababaligtad ulit into false kaya lilitaw ulit is yung ano natin outline icon.


