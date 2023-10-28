import React from "react";

const SignUp = () =>{
    const form = document.querySelector("form")
    const emailError = document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
    form.addEventListener("submit",async (e) => {
        e.preventDefault()

        emailError.textContent = ""
        passwordError.textContent = ""

        const email = form.email.value
        const password = form.password.value

        try {
            const res = await fetch("signup", {
                method: "POST",
                body: JSON.stringify({email,password}),
                headers: {"Content-Type" : "application/json"},
            });
            const data = await res.json()
            console.log(data)
            if(data.errors) {
                emailError.textContent = data.errors.email
                passwordError.textContent = data.errors.password
            }
            
        }catch(err){
            console.log(err)
        }
    })
    return(
        <form>
    <h2>Sign Up</h2>
    <label for="email">Email</label>
    <input type="text" name="email" required/>
    <div class="email error"></div>
    <label for="password">Password</label>
    <input type="password" name="password" required/>
    <div class="password error"></div>
    <button>Sign Up</button>
        </form>
    )
}

export default SignUp