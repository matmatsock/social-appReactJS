import Topbar from "../../Components/Topbar/Topbar";
import {Link} from "react-router-dom";
import { Component } from "react";
import TenPosts from "../../Components/Getposts/Getposts";


export default class Home extends Component {
      render() {
            <TenPosts />;

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