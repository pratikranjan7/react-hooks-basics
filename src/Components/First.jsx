import React, { useState } from "react";
export default function First(){
    const[age,setAge]=useState(19)
    const handelClick=()=>{
        setAge(age+1)
    }
    return(
        <>
        <div className="onebox">
            <p>Today I am {age} Years of Age</p>
            <button onClick={handelClick}>Get age</button>
        </div>
        </>
    )

}