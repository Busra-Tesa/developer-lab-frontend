

import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../AuthContext";
//  we might need this for later import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [redirect, setRedirect] = useState(false);
  //  we might need this later const navigate = useNavigate();

  function createNewPost(ev) {
    ev.preventDefault();
  
    if (!currentUser || !currentUser._id) {
      console.error("User not authenticated or user ID not available.");
      console.log("Id", currentUser?._id);
      return;
    }
  
    const postData = {
      title: title,
      content: content,
      author: currentUser._id,
      category: category
    };
  
    axios.post(`${import.meta.env.VITE_API_URL}/post`, postData)
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
        value={currentUser?._id} 
        disabled 
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(ev) => setCategory(ev.target.value)}
      />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
  );
}


export default CreatePost;
