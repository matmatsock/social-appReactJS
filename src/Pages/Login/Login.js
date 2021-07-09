import React, { useState } from 'react';
import LoginForm from './LoginForm';



export default function Login() {


      const adminUser = {
            email: "test@test.com",
            password: "test123"
      }

      const [user, setUser] = useState({ email: "", password: "" });
      const [error, setError] = useState("");

      const Login = details => {
            console.log(details);

            if (details.email == adminUser.email && details.password == adminUser.password) {
                  console.log("Zhakowano");
                  setUser({
                        email: details.email,
                        password: details.email
                  });
            } else {
                  console.log("Dane nie pasują!");
                  setError("Dane nie pasują!");
            }
      }
            


Logout = () => {
setUser({ email:"", email: ""});
 }
      
  return (
      <div>
              {(user.email !="") ? (
                  <div className="welcome">
                        <h2>Czołem, <span>{user.email}</span></h2>
                        <button onClick={Logout}>Nie-nie, ja spadam</button>
                  </div> ) : ( <LoginForm Login={Login} error={error} /> 
                  )}
      </div>
  );
}