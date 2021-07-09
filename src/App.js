
import Home from "./Pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {


  return (
    
    <Router>
      <div>
        <Topbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>

    
  );

}

