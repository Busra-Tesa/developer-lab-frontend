import React, { useState } from "react";
import { useContext } from "react";
import Categories from "../components/categories";
import axios from 'axios';
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";


import '../App.css';
import { useEffect } from "react";

function CreatePost({ updatePost, deletePost }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { currentUser } = useContext(AuthContext);
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser) {
      setAuthor(currentUser.name);
    }
  }, [currentUser]);

  function createNewPost(ev) {
    ev.preventDefault();

    const formData = new FormData();
    formData.set('title', title);
    formData.set('author', author);
    formData.set('content', content);
    formData.set('category', category);

    axios.post(`${import.meta.env.VITE_API_URL}/post`, formData)
      .then(response => {
        if (response.data.success) {
          setRedirect(true);
        } else {
          console.error('Post creation failed:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
      navigate(`/post?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&content=${encodeURIComponent(content)}&category=${encodeURIComponent(category)}`);
  }

  return (

    <>
   
    <Header/>
    <form className="create-post" onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(ev) => setAuthor(ev.target.value)}
        disabled 
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
      />
      <Categories
        selectedCategory={category}
        onCategoryChange={(selected) => setCategory(selected)}
      />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
    </>
  );

}
export default CreatePost;
