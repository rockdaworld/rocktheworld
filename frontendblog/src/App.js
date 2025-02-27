// src/App.js
import React, { useState } from 'react';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';

function App() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handlePostCreated = () => {
    // A simple way to refresh the list; you can also manage state more gracefully.
    setRefreshPosts(!refreshPosts);
  };

  return (
    <div className="App">
      <NewPostForm onPostCreated={handlePostCreated} />
      <PostList key={refreshPosts} />
    </div>
  );
}

export default App;
