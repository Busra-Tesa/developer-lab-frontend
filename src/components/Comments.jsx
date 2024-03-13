import React, { useState } from "react";

function Comments({ comments }) {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
 
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
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default Comments;