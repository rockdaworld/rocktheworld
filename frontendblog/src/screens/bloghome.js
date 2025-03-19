import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5282/api/Post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>

    <button onClick={() => navigate('/')}>Back to Home</button>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={styles.postContainers}>
          <h2>{post.title}</h2>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

const styles = {
    postContainers: {
        maxWidth: '600px',       // Limits the container's width
        margin: '20px auto',     // Centers the container and adds vertical spacing
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        borderRadius: '8px'
    }
};

export default BlogPosts;
