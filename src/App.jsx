import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostPage from './pages/PostPage'
// import { BrowserRouter as Router } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';

import HomePage from './pages/HomePage.jsx'

import LoginPage from './pages/LoginPage';
import PostDetails from './components/PostDetails.jsx'

import { Route,Routes } from 'react-router-dom'


import './App.css'

function App() {
  

  return (
    <>

      <Routes>

        <Route path="/" element={<HomePage />}>HomePage</Route>

       

        <Route path="/login" element={<LoginPage />} />
        <Route path ="/signup" element={<SignUpPage/> }/>
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </>
     
   
  );
}

export default App
