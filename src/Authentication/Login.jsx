import React from "react";

const Login = () => {
    const form = document.querySelector('form');
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      // reset errors
      emailError.textContent = '';
      passwordError.textContent = '';
  
      // get values
      const email = form.email.value;
      const password = form.password.value;
  
      try {
        const res = await fetch('/login', { 
          method: 'POST', 
          body: JSON.stringify({ email, password }),
          headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        console.log(data);
        if (data.errors) {
          emailError.textContent = data.errors.email;
          passwordError.textContent = data.errors.password;
        }
        if (data.user) {
          location.assign('/');
        }
  
      }
      catch (err) {
        console.log(err);
      }
    });
    return(
        <form action="/signup">
  <h2>Login</h2>
  <label for="email">Email</label>
  <input type="text" name="email"  />
  <div class="email error"></div>
  <label for="password">Password</label>
  <input type="password" name="password"  />
  <div class="password error"></div>
  <button>login</button>
</form>

    )
}

export default Login