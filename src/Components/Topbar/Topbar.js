import "./Topbar.css";
import {AssignmentInd, Assignment, Museum} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function Topbar() {
      return (
            <div className="topbarContainer">
                  <Link to="/home">
                  <div className="topbarLeft">
                        <Museum className="icons"/>
                        <div className="logoName">
                              atebook
                        </div>
                  </div>
                  </Link>


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
            </div>
      );
}