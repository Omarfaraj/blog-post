import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SubmitPost from './Components/SubmitPost';
import AdminDashboard from './Components/AdminDashboard';
import BlogPosts from './Components/BlogPost';
import './App.css';

function RouterComponent() {
    return (
        <Router>
            <div className="RouterComponent">
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path='/submit-post' element={<SubmitPost />} />
                        <Route path='/admin-dashboard' element={<AdminDashboard />} />
                        <Route path='/*' element={
                            <>
                                <Header />
                                <Footer />
                            </>
                        } />
                    </Routes>
                    <BlogPosts />
                </div> 
            </div>
        </Router>
    );
}

export default RouterComponent;
