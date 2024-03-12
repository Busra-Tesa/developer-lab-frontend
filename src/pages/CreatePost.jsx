import React, { useState } from "react";

import Categories from "../components/categories";
import axios from 'axios';
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";


import '../App.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const { currentUser } = React.useContext(AuthContext);
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  function createNewPost(ev) {

    ev.preventDefault();

    const formData = new FormData();
    formData.set('title', title);
    formData.set('author', author);
    //test to check if currentuser is added
    // console.log("Current user is",currentUser);
    formData.set('content', content);
    formData.set('category', category);

    axios.post('http://localhost:5005/post', formData)
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
      navigate("/postpage")

  }

  return (
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
  );
}

export default CreatePost;
