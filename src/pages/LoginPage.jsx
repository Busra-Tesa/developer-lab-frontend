import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import SignUpPage from "./SignUpPage.jsx";


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

    axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken);

        // Save the token in the localStorage.      
        storeToken(response.data.authToken);

        // Verify the token by sending a request 
        // to the server's JWT validation endpoint. 
        authenticateUser();

      })
      .catch((error) => {
        // const errorDescription = error.response.data.message;
        // setErrorMessage();
        console.log("error:", error);
      })
    navigate('/dashboard');
  };

  useEffect(() => {
    console.log("Arrived at Login Page");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="auth max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-8 px-4 text-white">
          Login
        </h1>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="email"
            name="email"
            onChange={handleEmail}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handlePassword}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </button>
          {err && <p>{err}</p>}
          <p className="text-center mt-4 text-lg">Don't have an account?</p>
          <div className="flex justify-center gap-6 mt-3">
            <NavLink
              to="/signup"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md text-center"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/"
              className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md text-center"
            >
              Home
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;