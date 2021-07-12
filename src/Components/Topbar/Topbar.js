import "./Topbar.css";
import { AssignmentInd, Assignment, Museum } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Component } from "react";

export default class Topbar extends Component {
      render() {
            let buttons;


            if (this.props.user) {
                  buttons - (
                        <div className="topbarRight">

                              <div className="logOut">
                                    <Link to="/">
                                          <button className="logoutBtn" onClick={() => localStorage.clear()}>Im out</button>
                                    </Link>
                              </div>

                        </div>
                  )
            } else {
                  buttons = (
                        
                  <div className="topbarCenter">
                        <Link to="/login">
                        <div className="logIn">
                        <button className="loginBtn">Zaloguj się!<AssignmentInd className="icons"/>
                        </button>
                        </div>
                        </Link>
                  </div>
                  
                  <div className="topbarRight">
                        <Link to="/signup">
                        <div className="signUp">
                        <button className="signupBtn"> < Assignment className="icons"/> Nie masz konta?</button>
                        </div>
                        </Link>
                  </div>



                  )
            }

            return (
                  <div className="topbarContainer">
                        <Link to="/">
                              <div className="topbarLeft">
                                    <Museum className="icons" />
                                    <div className="logoName">
                                          atebook
                                    </div>
                              </div>
                        </Link>
                        {buttons}
                  </div>
            );

      }
}