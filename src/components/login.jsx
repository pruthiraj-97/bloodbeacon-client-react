'use client'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { backend_url } from './BackenUrl';
import '../componentCSS/login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LoginComponent = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend_url}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if(data.status==200){
        localStorage.setItem('token',data.token)
        navigate('/')
      }else if(data.status==500){
        throw new Error(data.message)
      }else{
        setErrors(data.message)
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="login-container">
      {
        errors&&errors.map((error,index)=>(
          <p key={index} className="error-message">{error}</p>
        ))
      }
      <form onSubmit={handleSubmit} className="login-form">
        <h3 className="login-title">Log In</h3>
        <div className="login-div">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="login-div">
          <label htmlFor="password">Password:</label>
          <div className="password-div">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
        <p className='login-p'>Don't have an account? <Link to={`/signup`}
           className='login-link'
        >Sign Up</Link></p>
      </form>
    </div>
  );
};

export default LoginComponent;