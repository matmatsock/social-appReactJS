import Topbar from "../../Components/Topbar/Topbar";
import "./Login.css";
import {Museum} from "@material-ui/icons";


export default function Login() {
      return(
            <div className="login">
                  <div className="loginWrapper">
                        <div className="loginLeft">
                              <div className="loginLogo"><Museum className="iconsLogin"/>
                              </div>
                              <div className="logoLetters">
                              <h3>atebook</h3>
                              </div>
                        </div>

                        <div className="loginRight">
                              <div className="loginBox">
                                     <input placeholder="Email" className="loginInput"></input>
                                     <input placeholder="Password" className="loginInput"></input>
                                     <button className="loginloginBtn">Hack in!</button>
                                     
                              </div>
                        </div>
                  </div>
            </div>
      )

}