
import React from 'react';
import { useAuthContext } from "../../../../utils/Authcontext/authcontext";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { setToken } from "../../../../helpers";
import { API } from "../../../../constant";

const RegisterComponent = () => {

      const navigate = useNavigate();
    
      const { setUser } = useAuthContext();
    
      const [userData, setUserData] = useState(false);
    
      const [error, setError] = useState("");
   
  
      const onFinish = async (event) => {
        event.preventDefault(); // prevent form from refreshing the page
        const values = {
          username: event.target.username.value,
          email: event.target.email.value,
          password: event.target.password.value,
        };
        setUserData(true);
        try {
          const response = await fetch(`${API}/auth/local/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
      
          const data = await response.json();
          console.log(data);

          // set the token
          setToken(data.jwt);
    
          // set the user
          setUser(data.user);
      
          if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
          }
      
          // Set user data and navigate to another page

          setUser(data);
          console.log(data);
          navigate('/login'); // replace '/some-url' with the actual path you want to navigate to
        } catch (error) {
          setError(error.message);
          setUserData(false);
        }
      };

  //strapi backend API end point for register


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
  }

  return (
    <div className="LS">
            <div className="LS-form">
        <h1 className='head-form'>Create Account Now</h1>
        <span className="already-account"> 
           Already user of Lensask? <Link to="/login">Login now</Link>
           </span>
        <form onSubmit={(e) => { onFinish(e) }}>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={e => handleChange(e)} />
                    </label>
                     <br />
                       <label>
                        Email:
                        <input type="email" name="email" onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <button type='submit' >Signup</button>
                </form>
            </div>    
        </div>
  )
}

export default RegisterComponent;