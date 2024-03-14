
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import SignUpPage from "./SignUpPage.jsx";

const API_URL = "http://localhost:5005";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  
  /*  UPDATE - get authenticateUser from the context */
  const { storeToken, authenticateUser } = useContext(AuthContext);

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken );
      
        // Save the token in the localStorage.      
        storeToken(response.data.authToken);
        
        // Verify the token by sending a request 
        // to the server's JWT validation endpoint. 
        authenticateUser();                     // <== ADD
       
      })
      .catch((error) => {
        // const errorDescription = error.response.data.message;
        
        // setErrorMessage();
        console.log("error:", error);
      })
      navigate('/dashboard');
  };
  
  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit }>
        <input
          required
          type="text"
          placeholder="email"
          name="email"
          onChange={handleEmail}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handlePassword}
        />
        <button type="submit">Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/signup">Sing Up</Link>
        </span>
      </form>
    </div>
  )
}

export default LoginPage;