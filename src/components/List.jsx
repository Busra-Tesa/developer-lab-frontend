import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import Comments from "./Comments";
import Header from './Header';
import axios from "axios";

function List({ posts }) {
  const [editMode, setEditMode] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [updatedPosts, setUpdatedPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/post`)
      .then(response => {
        setUpdatedPosts(response.data);
      })
      .catch(error => {
        console.log("Error while trying to fetch the posts:", error);
      });
  };
  const setPosts = (newPosts) => {
    setUpdatedPosts(newPosts);
  };

  const handleSaveEdit = (postId) => {
    axios.put(`${import.meta.env.VITE_API_URL}/post/${postId}`, { content: editedContent })
      .then(() => {
        setEditMode(null);
        setEditedContent("");
        fetchPosts();
      })
      .catch(error => {
        console.error("Error updating post:", error);
      });
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedContent("");
  };

  const handleDeletePost = (postId) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/post/${postId}`)
      .then(() => {
        fetchPosts();
      })
      .catch(error => {
        console.log("Error while trying to delete a post:", error);
      });
  };

  return (
    <>
      <Header />
      <section className="w-full h-full bg-slate-900 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 py-20 h-full">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {updatedPosts.map((post) => (
              <div key={post._id} className="text-sm leading-6">
                <div className="relative group">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-center bg-cover border rounded-full text-white">
                        {post.author.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {post.author.name}
                        </h3>
                        <h4 className="text-white text-md">{post.title}</h4>
                        <br/>
                        <p className="text-white text-md">{post.author.email}</p>
                      </div>
                    </div>
                    {editMode === post._id ? (
                      <>
                        <textarea
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          className="w-full h-32 p-2 text-gray-300 bg-slate-800 border-b border-gray-700 rounded"
                        />
                        <div className="flex justify-between">
                          <FaSave
                            className="text-green-500 cursor-pointer"
                            onClick={() => handleSaveEdit(post._id)}
                          />
                          <FaTimes
                            className="text-red-500 cursor-pointer"
                            onClick={handleCancelEdit}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-md text-gray-300 leading-normal">{post.content}</p>
                        <div className="flex justify-between">
                          <FaTrashAlt
                            className="text-red-500 cursor-pointer"
                            onClick={() => handleDeletePost(post._id)}
                          />
                          <FaEdit
                            className="text-blue-500 cursor-pointer"
                            onClick={() => {
                              setEditMode(post._id);
                              setEditedContent(post.content);
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <Comments comments={post.comments} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


export default List;
