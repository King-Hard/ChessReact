# Handling Events

Events:

1, onClick - Sa onClick natin meron tayong variable, doon natin ilalagay yung mga mangyayari once na clinick ni user yung button na naka onClick

Example:
const handleClick = () =>{
    alert("Hello)
}

<button onClick={handleClick}>Click Me!</button>

2, onChange - Para makuha natin yung tinype ni user sa input type element natin, gagamit lang tayo ng onChange and then same with onClick need natin na gumawa ng handleChange then don natin gagawin mga mangyayaring onChange habang nagta-type si user. Need natin na gumamit ng event since sya yung gagamitin natin para makuha yung current na tina-type ni user sa input type natin event.target.value
Kung gusto naman natin sya i-show example gamit lang tayo nung useState like task, setTask ganon then sa loob ng setTask mangyayari yung manipulation saka natin tatawagin yung tas sa loob ng return natin

example:
const [task, useTask] = useState("")

const handleChange = (event) =>{
    setTask(event.target.value)
}

return(
    <p>{task}</p>
)

3, onSubmit













Summary:

1, onClick - Dito ganon lang din naman may handleClick tayo, then may onClick tayo and don natin ilalagay yung handleClick natin.


2, onChange - Dito need din natin ng event don sa handleChange natin sa parenthesis before arrow function, ngayon para makuha natin yung tina-type ni user sa loob ng input type gagawin natin yung event kanina na nilagay natin sa parenthesis is gagamitin na natin. Ganto lang event.target.value - makukuha na natin yung current na tina-type ni user sa input type natin.


3, onSubmit - Dito need natin ng event don sa handleSubmit natin sa parenthesis before arrow function, ngayon diba yung form natin is nagre-reload page natin every submit--usinng event na nilagay natin sa parenthesis kanina is sya yung magha-handle don para hindi mag reload gagawin lang natin even.preventDefault() - hindi na magre-reload yung submit natin everytime ci-clik natin sya.








1, onClick
const handleClick = () =>{
    alert("Hello World!)
}

<button onClick={handleClick}></button>

2, onChange
const [task, setTask] = useState("")
const handleChange = (event) =>{
    setTask(event.target.value)
}

<input onChange={handelChange}></input>
<p>{task}</p>