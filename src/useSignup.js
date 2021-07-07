import { useState, useEffect } from "react";

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
      };

      return {handleChange, values, handleSubmit, errors};
};

export default useSignup;