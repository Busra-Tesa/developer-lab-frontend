import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';




function PostPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
        try {
          // http://localhost:5005/post'
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/post`);

          const data = res.data;
          console.log("Data is:", data)
          
          if (!data || data.length === 0) {
            setError(true);
            return;
          }
      
          setRecentPosts(data);
          console.log('Recent Posts:', data);
        } catch (error) {
          console.log(error.message);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchRecentPosts();
  }, []);

   const handleUpdate = async (postId, updatedContent) => {
    try {
     
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/post/${postId}`, { content: updatedContent });
      if (res.data.success) {
       
        setRecentPosts(recentPosts.map(post => post._id === postId ? { ...post, content: updatedContent } : post));
        console.log('Post updated successfully');
      } else {
        console.error('Failed to update post:', res.data.message);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
    
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/post/${postId}`);
      if (res.data.success) {
        
        setRecentPosts(recentPosts.filter(post => post._id !== postId));
        console.log('Post deleted successfully');
      } else {
        console.error('Failed to delete post:', res.data.message);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        Error occurred while fetching data.
      </div>
    );
  }
 
  return (
    
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <PostList posts={recentPosts} />
      {/* handleUpdate={handleUpdate} handleDelete={handleDelete}  */}
     
    </main>
  );
}

export default PostPage;
