import React,{useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [msg,setmsg]=useState("")
    const navigate=useNavigate()
    async function Send(e) {
        e.preventDefault()
        try{
            const res=await axios.post('http://127.0.0.1:8000/api/login/',{username,password})
            setmsg(res.data.msg)
            if( res.data.msg=='1'){ // it can be used to navigaite on the spot we click on the login button
                navigate('/dashboard')
            }
            else if(msg==='0'){
                console.log("Invalid User");  
            }
        }catch(err){
            setmsg("Error")
        }
    }
    return (
        <div className="Login">
            <title>Login</title>
            <form onSubmit={Send} method="post">

                <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e)=>setusername(e.target.value)}
                />

                <br />

                <input 
                type="text" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                 />

                 <br />
                 
                 <button type="submit">Login</button>
            </form>
            <p>{msg}</p>
        </div>
    )
}