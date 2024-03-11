
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts && posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/post/${post._id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
