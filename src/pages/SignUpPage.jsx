import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SignUpPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [languages, setLanguages] = useState('');
  const [github, setGithub] = useState('');
  const navigate = useNavigate();

  // const token = localStorage.getItem("authToken");

  async function signup(ev) {
    ev.preventDefault();

    try {
      // http://localhost:5005/auth/signup'
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        email,
        password,
        name,
        languages,
        github,
      })
      navigate("/login");

    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup');
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="auth max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-8 px-4 text-white">
          Sign Up
        </h1>
        <form onSubmit={signup} className="space-y-4">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={ev => setPassword(ev.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="name"
            value={name}
            required
            onChange={ev => setName(ev.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="languages"
            value={languages}
            required
            onChange={ev => setLanguages(ev.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="github"
            value={github}
            required
            onChange={ev => setGithub(ev.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Sign Up
          </button>

          <p className="text-center mt-4 text-lg">Already have an account?</p>
          <div className="flex justify-center gap-6 mt-3">
            <NavLink
              to="/login"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md text-center"
            >
              Login
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
  );
}

export default SignUpPage;