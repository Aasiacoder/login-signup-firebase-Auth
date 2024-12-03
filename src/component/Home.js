import React from "react"
import { signOut } from "firebase/auth"//import signOut function for signout the user
import auth from "./config"//import auth variable to get a firebaseConfig and authentictaion
import { useNavigate } from "react-router-dom"//useNavigate for redirect to other page

function Home() {
    const navigate = useNavigate()

    function logoutUser() {
        signOut(auth).then(()=>{// if click Logout btn means user was signOut in auth variable and navigate to login page 
            navigate("/login")
        })
    }
    return (
        <div>Home
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Home