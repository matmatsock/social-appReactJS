import "./topbar.css";
import { AssignmentInd, Assignment, Museum } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Topbar(props) {

      let buttons;

      const logOut = () => {

            const headers = {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + props.currentUser.jwt_token
            }

            axios.post(
                  'http://akademia108.pl/api/social-app/user/logout',
                  JSON.stringify({}),
                  { 'headers': headers })
                  .then((req) => {

                      props.setCurrentUser(null);
                      localStorage.setItem('user', null)

                  }).catch((error) => {
                        console.error(error);
                  })
      }

      if (props.currentUser) {
            buttons = (
                  <div className="topbarRight">

                        <div className="logOut">
                              <Link to="/">
                                    <button className="logoutBtn" onClick={logOut}>Im out</button>
                              </Link>
                        </div>

                  </div>
            )
      } else {
            buttons = (
                  <>
                        <div className="topbarCenter">
                              <Link to="/login">
                                    <div className="logIn">
                                          <button className="loginBtn">Zaloguj się!<AssignmentInd className="icons" />
                                          </button>
                                    </div>
                              </Link>
                        </div>

                        <div className="topbarRight">
                              <Link to="/signup">
                                    <div className="signUp">
                                          <button className="signupBtn"> < Assignment className="icons" /> Nie masz konta?</button>
                                    </div>
                              </Link>
                        </div>
                  </>


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