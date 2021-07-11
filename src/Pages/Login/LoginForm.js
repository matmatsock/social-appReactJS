import React, { useState } from 'react';
import "./Login.css";
import { Museum } from "@material-ui/icons";


export default function LoginForm({ Login, error }) {
      const [details,setDetails] = useState({ username:"", password:""});
      
      const submitHandler = e => {
            e.preventDefault();

            Login(details);
      }
      
      return (
            <form onSubmit={submitHandler}>
                  <div className="login">
                        <div className="loginWrapper">
                              <div className="loginLeft">
                                    <div className="loginLogo"><Museum className="iconsLogin" />
                                    </div>
                                    <div className="logoLetters">
                                          <h3>atebook</h3>
                                    </div>
                              </div>

                              <div className="loginRight">
                                    <h2>Wbijaj</h2>
                                    {(error != "") ? ( <div className="error">{error}</div>) : ""}
                                    <div className="loginBox">
                                          <input placeholder="User name" type="text" className="loginInput" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
                                          <input type="text" placeholder="Password" className="loginInput" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                                          <button className="loginloginBtn" value="LOGIN">Hack in!</button>

                                    </div>
                              </div>
                        </div>
                  </div>
            </form>
      )

}