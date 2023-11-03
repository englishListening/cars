import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Authentication.css"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [location,setLocation] = useState('')
    const [userName, setUserName] = useState('')
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("https://spontaneous-youtiao-360c81.netlify.app/signup",{
                email,password,userName,location
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/",{state:{id:email}})
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
            <div className="registration form">
      <header>Signup</header>
      <form action="POST">
                <input type="userName" onChange={(e) => { setUserName(e.target.value) }} placeholder="UserName" />
                <input type="loaction" onChange={(e) => { setLocation(e.target.value) }} placeholder="Location" />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" className="button" value="Signup" onClick={submit} />
      </form>
      <div className="signup">
        <span className="signup">Already have an account?
         <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
        </div>
        </div>
    )
}

export default Login