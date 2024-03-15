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
    <div className="comment-section mt-4 p-4 bg-white rounded-lg border border-gray-300">
    <input
      type="text"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Enter your comment"
      className="w-full mb-2 px-3 py-2 rounded border border-gray-300"
    />
    <button
      onClick={handleAddComment}
      className="block w-full px-4 py-2 text-white bg-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none"
    >
      Add Comment
    </button>

    <div className="mt-4">
      {comments.map((comment, index) => (
        <div key={index} className="text-black">{comment.content}</div>
      ))}
    </div>
  </div>
  );
}

export default Comments;
