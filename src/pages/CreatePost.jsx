

import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function CreatePost() {

const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();


  console.log (currentUser);
  function createNewPost(ev) {
    ev.preventDefault();

  
    
        
        const formData = new FormData();
        formData.set('title', title);
        formData.set('author', currentUser._id); // Assuming _id is the user ID
        formData.set('content', content);
        formData.set('category', category);
          console.log(formData);
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
          })

       // navigate('/post?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&content=${encodeURIComponent(content)}&category=${encodeURIComponent(category)}');
       }
      
 
  return (
    <form className="create-post" onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      {/* Author input is removed since it's now taken from currentUser */}
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
