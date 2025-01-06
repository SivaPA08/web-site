import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Register() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cp, setcp] = useState("");
  const [msg, setmsg] = useState("");
  const [dis, setdis] = useState(true);


  useEffect(() => {
    if (password === cp && password !== "") {
      setdis(false); 
    } else {
      setdis(true); 
    }
  }, [password, cp]); 

  async function Send(e) {
    e.preventDefault()
    try{
        const res=await axios.post('http://127.0.0.1:8000/api/register/',{username,password});
        setmsg(res.data.msg)
    }catch(err){
        setmsg("Error")
    }
    
  }

  return (
    <div className="register">
        <title>Register</title>
      <form onSubmit={Send} method="post">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br />

        <input
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />

        <input
          type="password" 
          placeholder="Confirm Password"
          value={cp}
          onChange={(e) => setcp(e.target.value)}
        />
        <br />

        <button type="submit" disabled={dis}>
          Register
        </button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
