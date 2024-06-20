import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SubmitPost from './Components/SubmitPost';
import AdminDashboard from './Components/AdminDashboard';
import BlogPosts from './Components/BlogPost';
import Post from './Components/Post';
import NotFound from './PageNotFound/NotFound';
import './App.css';

function RouterComponent() {
  const [posts, setPosts] = useState([]); 
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  // const handleError = (message) => {
  //   setError(message);
  //   navigate('/page-not-found');
  // }

  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className="RouterComponent">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/submit-post' element={<SubmitPostWrapper onPostSubmit={handleNewPost} setError={setError} />} />
            <Route path='/admin-dashboard' element={<AdminDashboardWrapper setError={setError} />} />
            <Route path='/blog-posts' element={<BlogPostsWrapper setError={setError} />} />
            <Route path='/page-not-found' element={<NotFound errorMessage={error} />} />
            <Route path='/*' element={
              <>
                <Header />
                <Footer />
                <NotFound errorMessage={error} />
              </>
            } />
          </Routes>
          <BlogPosts />
          <div className='post-list'>
           {posts.map((post, index) => (
            <Post key={index} title={post.title} content={post.content} />
           ))}  
          </div> 
        </div> 
      </div>
    </Router>
  );
}

const noop = () => {};

function SubmitPostWrapper({ onPostSubmit, setError }) {
  return <SubmitPost onError={noop} onPostSubmit={onPostSubmit} />;
}

function AdminDashboardWrapper({ setError }) {
  return <AdminDashboard onError={noop} />;
}

function BlogPostsWrapper({ setError }) {
  return <BlogPosts onError={noop} />;
}

export default RouterComponent;
