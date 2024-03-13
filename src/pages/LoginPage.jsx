import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext.jsx";
import SignUpPage from "./SignUpPage.jsx";
import HomePage from "./HomePage.jsx";
// added
import { Navigate } from "react-router-dom";


const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(inputs);
      if (response.status === 200) {
        setRedirect(true);
      } else {
        setError('Wrong credentials');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while logging in.');
    }
  };

  if (redirect) {
     return <Navigate to="/dashboard" />;
  }



  return (
  
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/signup">Sing Up</Link>
        </span>
      </form>
    </div>
  );
};


export default LoginPage;
