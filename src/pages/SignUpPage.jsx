import {useState} from "react";

 function SignUpPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [languages, setLanguages] = useState('');
  const [github, setGithub] = useState('');

  function signup(ev) {
    ev.preventDefault();
    const response =  fetch('http://localhost:5137/auth/signup', {
      method: 'POST',
      body: JSON.stringify({email,password,name,languages,github}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('signup successful');
    } else {
      alert('signup failed');
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