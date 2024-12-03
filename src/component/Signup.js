import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "./config"
import { useNavigate } from "react-router-dom"

function Signup() {
    const [user,setUser] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    function signupUser(){
        //createUserWithEmailAndPassword function here i put auth, user,password here user,possword was stored data in firebase authentication
        createUserWithEmailAndPassword(auth,user,password).then(()=>{
            console.log("User Registered");//give email,password and click signup now it stored in firebase learnfirebase-basic project users page
            navigate("/login") //after user registered i navigate to login page
        })
    }

    return (
        <div>
            <h1>Signup</h1>
            <input onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Username"/>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password"/>
            <button onClick={signupUser}>Sign up</button>
        </div>
    )
}

export default Signup;