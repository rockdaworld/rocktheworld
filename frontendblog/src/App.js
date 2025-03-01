// src/App.js
import React, { useState } from 'react';
import PostList from './components/PostList';
import NewPostForm from './components/NewPostForm';
import { motion } from "motion/react"

function App() {
  const [refreshPosts, setRefreshPosts] = useState(false);

  const handlePostCreated = () => {
    // A simple way to refresh the list; you can also manage state more gracefully.
    setRefreshPosts(!refreshPosts);
  };





  return (
    
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition= {{ 
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <h1 style={styles.introtext}>what up new york</h1>
    </motion.div>

    // <div className="App">
    //   <NewPostForm onPostCreated={handlePostCreated} />
    //   <PostList key={refreshPosts} />
    // </div>
  );
}

const styles = {
  introtext: {
    textAlign: "center",
  },
}



export default App;
