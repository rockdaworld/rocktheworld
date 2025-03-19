// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './screens/landingpage';
import BlogEditor from './screens/blogeditor';
import BlogHome from './screens/bloghome';



function App() {


  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<BlogEditor />} />
        <Route path="/blog" element={<BlogHome/>}/>
      </Routes>
    </BrowserRouter>

    

    // <div style={styles.welcome}>   
    //    <WelcomeAnimation />
    // </div>

    // <div className="App">
    //   <NewPostForm onPostCreated={handlePostCreated} />
    //   <PostList key={refreshPosts} />
    // </div>
  );
}

export default App;

