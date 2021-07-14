import { useState, useEffect } from "react";
import axios from "axios";

const useSignup =  validate => {
      const [values, setValues] = useState({
            username:'',
            email:'',
            password:'',
            password2:''
      });
      const [errors, setErrors] = useState({});

      // const[isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = e => {
            const { name, value } = e.target;
            setValues({
                  ...values,
                  [name]: value
                });
      };

      const handleSubmit = e => {
            
            setValues({
                  ...values,
                  [e.target.name]: e.target.value
            });
            
             e.preventDefault();

            setErrors(validate(values));
            let newUser = {
                  username: values.username,
                  email: values.email,
                  password: values.password,
              }
              
              const headers = {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
              
              axios.post(
                      'http://akademia108.pl/api/social-app/user/signup', 
                      JSON.stringify(newUser),
                      { 'headers': headers })
                  .then((req) => {
              
                      // your code :)      
                
                      console.log(req.data);  
                  }).catch((error) => {
                      console.error(error);
                  })
      };

      return {handleChange, values, handleSubmit, errors};
};

export default useSignup;