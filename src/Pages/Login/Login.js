import React, { useState } from 'react';
import LoginForm from './LoginForm';

import axios from 'axios';


export default function Login(props) {


      const [error, setError] = useState("");

      const Login = details => {
            console.log(details);

            const headers = {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
            }

            axios.post(
                  'http://akademia108.pl/api/social-app/user/login',
                  JSON.stringify(details),
                  { 'headers': headers })
                  .then((req) => {

                        if (req.data.error) {
                              console.log('błąd');
                        } else {
                              localStorage.setItem('user', JSON.stringify(req.data))
                              props.setCurrentUser(req.data);
                        }


                  }).catch((error) => {
                        console.error(error);
                  })
      };



      return (
            <div>
                  <LoginForm Login={Login} error={error} />
            </div>
      );
}