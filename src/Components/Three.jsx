import React, { useState } from "react";
export default function Three(){
    const[state,setstate]=useState({age:3,sibling:5})
    const{age,sibling}=state
    const change=()=>{
        setstate({age:age+1,sibling:sibling+1})
    }
    return(
        <>
        <div className="threebox">
            <p>I am {age} years old and have {sibling} siblings</p>
            <button onClick={change}>add both age & siblings</button>
        </div>
        </>
    )
}