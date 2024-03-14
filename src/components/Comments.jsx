import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

function Comments({ postId, comments, handleCreateComment }) {
  const [comment, setComment] = useState('');
  // const { currentUser } = useContext(AuthContext); 

  const handleAddComment = () => {
    if (comment.trim() !== '') {

      handleCreateComment(postId, comment);
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
      <button
        onClick={handleAddComment}
        className="mt-4 px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none"
      >
        Add Comment
      </button>

      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment.content}</div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
