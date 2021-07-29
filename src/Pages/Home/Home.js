import { Component } from "react";
import GetPosts from "../../Components/Posts/Getposts";
import PutPost from "../../Components/Posts/Putpost";


export default function  Home () {

      


      
      return (
            <div className="home">
                  <h2>Lista postów</h2>

                  <GetPosts />
            </div>
      )
}