import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from '../pages/CreatePost';
import List from '../components/List';

function PostManager() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/posts`)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log("Error while trying to fetch the posts:", error);
            });
    };

    useEffect(() => {
        console.log("Posts updated:", posts);
    }, [posts]);

    return (
        <>
            <CreatePost setPosts={setPosts} />
            <List posts={posts} />
        </>
    );
}

export default PostManager;
