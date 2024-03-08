import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostPage from './pages/PostPage'
import { BrowserRouter as Router } from "react-router-dom";


import { Route,Routes } from 'react-router-dom'


import './App.css'

function App() {
  

  return (
    <>
   
      <Routes>
       
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </>
     
   
  );
}

export default App
