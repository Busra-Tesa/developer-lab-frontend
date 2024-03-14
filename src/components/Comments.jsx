import React, { useState, useContext } from "react"; 
import { AuthContext } from "../AuthContext"; 

function Comments({ postId, comments, onCreateComment }) {
  const [comment, setComment] = useState('');
  // const { currentUser } = useContext(AuthContext); 

  const handleAddComment = () => {
    if (comment.trim() !== '') {
     
      onCreateComment(postId, comment); 
      setComment('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
     
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment.content}</div> 
        ))}
      </div>
    </div>
  );
}

export default Comments;
