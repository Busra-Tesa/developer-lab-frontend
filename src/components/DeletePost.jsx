import React from 'react';
import axios from 'axios';

function DeletePost({ postId }) {
  function handleDelete() {
    axios.delete(`${import.meta.env.VITE_API_URL}/post/${postId}`)
      .then(response => {
        console.log('Post deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting this post:', error);
      });
  }

  return (
    <button onClick={handleDelete}>Delete Post</button>
  );
}

export default DeletePost;
