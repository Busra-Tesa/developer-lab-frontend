import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostPage from './pages/PostPage'
// import { BrowserRouter as Router } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage';
import PostDetails from './components/PostDetails.jsx'
import CreatePost from './pages/CreatePost.jsx'
import { Route,Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage';


import './App.css'

function App() {
  

  return (
    <>

      <Routes>

        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/login" element={<LoginPage />}>LoginPage</Route>
        <Route path="/signup" element={<SignUpPage />}>SignUp</Route>
        <Route path="/post" element={<PostPage />}>PostPage</Route>
        <Route path="/dashboard" element={<DashboardPage />}>DashboardPage</Route>
        <Route path="/post/:postId" element={<PostDetails />} >PostDetails</Route>
        
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
     
   
  );
}

export default App
