# React Hooks

1, useState - 


2, useRef - Sa useRef natin lagi sya mag ka-partner na .current example variable.current ganyan. Yung useRef natin para syang document.getElementById("") Example meron tayong isang element lagay lang tayo ng ref={variable} tapso const lang natin yung nilagay natin variable then equal to useRef then yun na meron na tayo acces sa element na yon ano mang changes gawin natin is pwede using useRef

import {useRef} from "react"
const focusRef = useRef()
const handleFocus = () =>{
    focusRef.current.focus()
}
<input ref={focusRef} placeholder="FirstName">
<button onClick{handleFocus}></button>

Gaya ng sabi natin laging may ka-partner na .current yung useRef variable natin, then saka natin i-eexecute yung mangyayari sa element natin na yon using useRef.

3, useEffect - useEffect natin lagay lang natin sya sa baba ng const variable natin.
useEffect(() =>{

}, []) - the bracket is dependencyList natin

Sa useEffect natin kada changes na nangyayari sa nilagay natin doon sa dependecyList na variable, is magru-run din yung changes na nilagay natin dito sa loob ng useEffects natin kumbga salitan sila kada change sa variable natin, magru-run din aga yung changes na inilagay natin sa loob ng useEffect natin.

Kapag empty naman yung dependecyList natin is once lang mangyayari yung ginagawa nating change don sa loob ng useEffect natin.

We have 2 ways of using useEffect 1st is yung no empty depedencyList, 2nd is yung meron laman.

1st: Dito is kada changes na nangyayari sa variable na inilagay natin sa dependecyList is magru-run din yung useEffect natin kasunuran lang.
2nd: Dito naman is empty yung dependecyList natin, ibig sabihin neto is once nya lang iru-run yung changes na ginawa natin sa loob ng useEffect natin.


4, useContext -


5, useReducer - Bali we have 3 const para gawin yung useReducer nato.
1st: We need handle para sa initialState


2nd: We need handle para sa Reducer


3rd: We need handle para sa initialState handle and reducer handle natin
example: 
const App = () =>{
     const [state, dispatch] 
}




6, useCallback - 
7, useMemo -