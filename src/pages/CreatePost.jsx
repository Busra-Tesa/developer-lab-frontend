

import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
//  we might need this for later import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  function createNewPost(ev) {
    ev.preventDefault();

    if (!user || !user._id) {
      console.error("User not authenticated or user ID not available.");
      console.log("Id", user?._id);
      return;
    }

    const postData = {
      title: title,
      content: content,
      author: user._id,
      category: category
    };

    axios.post(`${import.meta.env.VITE_API_URL}/post`, postData)
      .then(response => {
        if (response.data) {
          console.log('Post created successfully:', response.data);
          setRedirect(true);
        } else {
          console.error('Post creation failed: Response data is empty');
        }
        navigate("/post");
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
        required 
        title="Please add a Title for your post"
      />

      {/* <input
        type="text"
        placeholder="Author"
        // value={user?._id}
        disabled
      /> */}
      <textarea
        placeholder="Content"
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
        required 
        title="Content can not be left empty"
      />
      <select
        value={category}
        onChange={(ev) => setCategory(ev.target.value)}
        required 
        title="You must choose a category"
      >
        <option value="">Select a category</option>
        <option value="Javascript">Javascript</option>
        <option value="CSS">CSS</option>
        <option value="React">React</option>
        <option value="HTML">HTML</option>
        required 
       
      </select>
      <button
        type="submit"
        className="block mx-auto mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
      >
        Create
      </button>
    </form>

  );
}


export default CreatePost;
