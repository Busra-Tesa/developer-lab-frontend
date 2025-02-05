import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostPage from './pages/PostPage'
// import { BrowserRouter as Router } from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage';
// import PostDetails from './components/PostDetails.jsx'
import CreatePost from './pages/CreatePost.jsx'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage';
import IsAnon from './components/IsAnon.jsx';
import IsPrivate from './components/IsPrivate.jsx';
import AboutPage from './pages/AboutPage.jsx'
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css'
import Header from './components/Header.jsx';

function App() {


  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<HomePage />}>HomePage</Route>
        <Route path="/login" element={<LoginPage />}>LoginPage</Route>
        <Route path="/signup" element={<SignUpPage />}>SignUp</Route>
        <Route path="/about" element={<AboutPage />}>AboutPage</Route>
        <Route path="/article" element={<ArticlePage />}>ArticlePage</Route>
        <Route path="/post" element={<IsPrivate><PostPage /></IsPrivate>}>PostPage</Route>
        <Route path="/dashboard" element={<IsPrivate><DashboardPage /></IsPrivate>}>DashboardPage</Route>
        <Route path="/*" element={<NotFoundPage />} />

        {/* <Route path="/post/:postId" element={<PostDetails />} >PostDetails</Route> */}

        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>


  );
}

export default App
