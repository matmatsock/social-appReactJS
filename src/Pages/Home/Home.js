import Topbar from "../../Components/Topbar/Topbar";
import {Link} from "react-router-dom";
import { Component } from "react";



export default class Home extends Component {
      render() {
     if(this.props.user){
           return (
                 <h2>Cześć {this.props.user.username}</h2>   
           )
     }

     return(
           <h2>Nie rozpoznaje cię</h2>
     )
}
}