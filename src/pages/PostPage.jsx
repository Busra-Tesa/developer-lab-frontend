
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import PostDetails from '../components/PostDetails';
import PostList from '../components/Postlist'; 

function PostPage() {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        if (!postId) {
            setLoading(false);
            setError(true);
            return;
          }

        const res = await axios.get(`http://localhost:5005/post/${postId}`);
        const data = res.data;

        if (!data || data.posts.length === 0) {
          setError(true);
          setLoading(false);
          return;
        }

        setPost(data.posts[0]);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await axios.get(`/api/post/getposts?limit=4`);
        const data = res.data;

        if (!data || !data.posts || data.posts.length === 0) {
            setError(true);
            return;
          }

        setRecentPosts(data.posts);
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
       
      </div>
    );
    
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      

     
      <PostList posts={recentPosts} />
    </main>
  );
}

export default PostPage;
