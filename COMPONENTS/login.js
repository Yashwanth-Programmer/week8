import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './applogo.png';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3200/users');
      const users = await response.json();
      const user = users.find((user) => user.email === email);
      if (user && user.password === password) {
        console.log('Login successfully!');
        sessionStorage.setItem('user', JSON.stringify(user));
        onLoginSuccess(); 
        alert("LOGIN SUCCESSFULLY");
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error logging in. Please try again later.');
    }
  };


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="mb-3">
            <img src={img} alt="App Logo" />
          </div>
          <form onSubmit={handleSubmit} className="shadow p-4">
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <hr />

            <p className="text-center mb-0">
              If you don't have an account <a href="./registerpage">Register Now</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
