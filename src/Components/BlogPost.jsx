import React from 'react';
import Post from './Post';

const BlogPost = ({ posts }) => {
   return (
    <div className='blog-post'>
     {posts.map((post,index) => (
        <Post key={index} title={post.title} content={post.content} />
     ))}
    </div>
   )
}

export default BlogPost;