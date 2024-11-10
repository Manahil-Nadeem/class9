"use client"
import { useEffect } from "react"
import { useState } from "react"

export default function Page(){
    const[counter,setCounter] = useState(0)
    useEffect(()=>{
  setCounter(counter+10)
    },[])
    function updateCounter(){
        console.log(counter)
        setCounter(counter+1)
        console.log(counter)
    }
   
    // counter ko update keliye but no need b/c we use "useState"
    // let counter = 1

    // function updateCounter(){
    //     counter++
    //     console.log("Inside Function")
    // }
    return(
<div>
<p>{counter}</p>

<button onClick={()=>updateCounter()}>Add Counter</button>
</div>
        
    )
}