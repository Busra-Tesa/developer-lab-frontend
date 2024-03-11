import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostPage from './pages/PostPage'
import { BrowserRouter as Router } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
<<<<<<< Updated upstream
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx'

=======
import Login from './pages/Login';
import Post from './components/PostDetails.jsx'
>>>>>>> Stashed changes

import { Route,Routes } from 'react-router-dom'


import './App.css'

function App() {
  

  return (
    <>

      <Routes>

        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/post" element={<HomePage />}>PostPage</Route>
        <Route path="/signup" element={<SignUpPage />}>SignUpPage</Route>
       
<<<<<<< Updated upstream

=======
        <Route path="/login" element={<Login />} />
        <Route path ="/signup" element={<SignUpPage/> }/>
        <Route path="/post" element={<PostDetails />} />
>>>>>>> Stashed changes
      </Routes>
    </>
     
   
  );
}

export default App
