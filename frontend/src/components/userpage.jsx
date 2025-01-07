import Login from "./login";
import Register from "./register";
import React,{useState} from "react";
export default function User(){
    const [opt,setopt]=useState(true)

    return (
        <div>
            <div className="navigation">
                <button onClick={(e)=>setopt(true)}>Login</button>
                <button onClick={(e)=>setopt(false)}>Register</button>
            </div>
            <br />
            <div className="logic">
                {opt?<Login></Login>:<Register></Register>}
            </div>
        </div>
    )
}
