import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss';

const LoginComponent = () => {
    const navigate = useNavigate();
  const [userData, setUserData] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('/api/login', { ...userData });
        console.log('Logged in successfully!')
      navigate('/');
    } catch (err) {
      console.log(err.response.data);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value })
  }

    return (
        // give the classes according to login.scss
        <div className="login">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="identifier" onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" onChange={e => handleChange(e)} />
                    </label>
                    <br />
                    <button>Login</button>
                </form>
            </div>    
        </div>
  )
}

export default LoginComponent;