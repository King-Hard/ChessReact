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

3, useEffect -
4, useContext -
5, useReducer - 
6, useCallback - 
7, useMemo -