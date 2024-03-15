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
    <>

      <div>
        <NavLink to="/" className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black" aria-current="page">Home</NavLink>
      </div>

      <form className="signup" onSubmit={signup}>
        <h1>signup</h1>

        <input type="text"
          placeholder="email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
          required />
        <input type="text"
          placeholder="password"
          value={password}
          required
          onChange={ev => setPassword(ev.target.value)} />
        <input type="text"
          placeholder="name"
          value={name}
          required
          onChange={ev => setName(ev.target.value)} />
        <input type="text"
          placeholder="languages"
          value={languages}
          required
          onChange={ev => setLanguages(ev.target.value)} />
        <input type="text"
          placeholder="github"
          value={github}
          required
          onChange={ev => setGithub(ev.target.value)} />

        <button>signup</button>
      </form>
    </>

  );
}

export default SignUpPage;