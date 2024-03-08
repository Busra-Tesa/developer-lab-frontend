import {useState} from "react";
import axios from "axios";

 function SignUpPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [languages, setLanguages] = useState('');
  const [github, setGithub] = useState('');

  async function signup(ev) {
    ev.preventDefault();

    try {
      const response = await axios.post('http://localhost:5137/signup', {
        email,
        password,
        name,
        languages,
        github,
      });

      if (response.status === 200) {
        alert('signup successful');
      } else {
        alert('signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup');
    }
  }
  return (
    <form className="signup" onSubmit={signup}>
      <h1>signup</h1>
      <input type="text"
             placeholder="email"
             value={email}
             onChange={ev => setEmail(ev.target.value)}/>
      <input type="text"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
        <input type="text"
             placeholder="name"
             value={name}
             onChange={ev => setName(ev.target.value)}/>
             <input type="text"
             placeholder="languages"
             value={languages}
             onChange={ev => setLanguages(ev.target.value)}/>
             <input type="text"
             placeholder="github"
             value={github}
             onChange={ev => setGithub(ev.target.value)}/>

      <button>signup</button>
    </form>
  );
}

export default SignUpPage;