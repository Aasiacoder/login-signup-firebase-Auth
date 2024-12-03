import React, { useEffect } from "react";
import auth from "./config"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";//signin email,password is use in login page process
import { useNavigate } from "react-router-dom";

function Login() {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    //before open login page this useEffect function will run
    useEffect(()=>{//if user already loggedIn means before open login page it will redirect to home page directly
        auth.onAuthStateChanged(function(user)//onAuthStateChanged function have callback function
        {
            if(user){
                console.log("Logged In")//signed up user was now able to login
                navigate("/home")//after login redirect to home page
            }else{//if user not here means i was stay in login page and show the "Logged Out", then now i give email,pass and click login btn now i "Logged In" again i loggedIn means it redirect to home page
                console.log("Logged Out")//no user means it will  shown then i do a login process
            }
        })
    },[])//[]-dependence empty gave here for 1 time run 
    function loginUser(){
        //signed in user,password was stored in firebase,now i loggedIn that signedIn user 
        signInWithEmailAndPassword(auth,user,password).then(()=>{
            console.log("User Logged In")
            navigate("/home")//if user was logged in successfully means it will redirect to home page
        }).catch(()=>{
            console.log("Failed to Log In")
          //  navigate("/signup")//"Failed to Log In" means that user not found here, so first signup the user and after that do login 
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Username" />
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" />
            <button onClick={loginUser}>Login</button>
        </div>
    )
}

export default Login