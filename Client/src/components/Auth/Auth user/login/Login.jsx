import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../../../utils/Authcontext/authcontext";
import { setToken } from "../../../../helpers";
import { API } from "../../../../constant";
import './LS.scss';

const LoginComponent = () => {
    
  const { setUser } = useAuthContext();

  const [userData, setUserData] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  // fix: error on undefine value
 

  const onFinish = async (event) => {
    event.preventDefault(); // prevent form from refreshing the page
    setUserData(true);
    const values = {
      identifier: event.target.email.value,
      password: event.target.password.value,
  
    };
    console.log(values);

    try {
      const response = await fetch(`${API}/auth/local`, {
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
      console.log("Welcome Back! ", data.user.username, "You are now logged in.")

      if (token && user) {
        console.log('User is authenticated', token, user);
      } else {
        console.log('User is not authenticated');
      }
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

  
      // Set user data and navigate to another page

      setUser(data);
      console.log(data);
      navigate('/', { replace: true }); // replace '/some-url' with the actual path you want to navigate to
    } catch (error) {
      setError(error.message);
      setUserData(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value })
  }

    return (
        // give the classes according to login.scss
        <div className="LS">
            <div className="LS-form">
          <h1 className='head-form'>Login to continue</h1>
          <span className="already-account"> 
           New to Lensask? <Link to="/signup">Join now</Link>
          </span>
          
          {error && <span style={{ color: "red", padding:"15px" }}>{"Your password or username is incorrect"}</span>}
            
                <form onSubmit={(e)=>{onFinish(e)}}>
                    <label>
                        Email:
                        <input type="text" name="email" onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" onChange={e => handleChange(e)} />
                    </label>
            <br />
            
                    <button type='submit'>Login</button>
                </form>
            </div>    
        </div>
  )
}

export default LoginComponent;