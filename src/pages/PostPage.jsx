import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/List';
// import CreatePost from '../components/CreatePost';



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

  // logic for create new post from createpost page

  // const handleCreatePost = (newPost) => {
  //   setRecentPosts([newPost, ...recentPosts]);
  // };

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
    
    <main className='p-3 flex flex-col mx-auto min-h-screen'>
      {/* <CreatePost onCreatePost={handleCreatePost} we don't need it /> */}
      <List posts={recentPosts} />
      {/* // handleUpdate={handleUpdate} handleDelete={handleDelete} nor this until now  */}
     
    </main>
  );
}

export default PostPage;
