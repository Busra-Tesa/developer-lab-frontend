import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostPage from './pages/PostPage'
// import { BrowserRouter as Router } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { Route,Routes } from 'react-router-dom'


import './App.css'

function App() {
  

  return (
    <>

      <Routes>

        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/signup" element={<SignUpPage />}>SignUpPage</Route>
        <Route path="/post" element={<PostPage />}>PostPage</Route>
        <Route path="/login" element={<LoginPage />}>LoginPage</Route>
       
      </Routes>
    </>
     
   
  );
}

export default App
