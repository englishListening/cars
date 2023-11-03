import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Authentication.css"

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function LoginSubmit(e){
        e.preventDefault();

        try{

            await axios.post("https://spontaneous-youtiao-360c81.netlify.app/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (


        <div className="Signbody">
            <div className="container">
    <div className="login form">
      <header>Login</header>
      <form action="POST">
        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <input type="submit" className="button" value="Login" onClick={LoginSubmit}/>
      </form>
      <div className="signup">
        <div className="signup">Don't have an account?
         <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
    
  </div>
  </div>
    )
}

export default Login