import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar">
           <h1>Blog Post</h1>
            <div className='links'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/submit-post">Submit Post</Link>
            <Link to="/admin-post">Admin Post</Link>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;



