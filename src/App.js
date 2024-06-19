import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SubmitPost from './Components/SubmitPost';
import AdminDashboard from './Components/AdminDashboard';
import BlogPosts from './Components/BlogPost';
import NotFound from './PageNotFound/NotFound';
import './App.css';

function RouterComponent() {
  const [error, setError] = useState(null);

  return (
    <Router>
      <div className="RouterComponent">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/submit-post' element={<SubmitPostWrapper setError={setError} />} />
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
        </div> 
      </div>
    </Router>
  );
}

function SubmitPostWrapper({ setError }) {
  const navigate = useNavigate();
  const handleError = (message) => {
    setError(message);
    navigate('/page-not-found');
  };
  return <SubmitPost onError={handleError} />;
}

function AdminDashboardWrapper({ setError }) {
  const navigate = useNavigate();
  const handleError = (message) => {
    setError(message);
    navigate('/page-not-found');
  };
  return <AdminDashboard onError={handleError} />;
}

function BlogPostsWrapper({ setError }) {
  const navigate = useNavigate();
  const handleError = (message) => {
    setError(message);
    navigate('/page-not-found');
  };
  return <BlogPosts onError={handleError} />;
}

export default RouterComponent;
