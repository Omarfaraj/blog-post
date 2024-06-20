import React, { useState } from 'react';

const SubmitPost = ({ onError, onPostSubmit }) => {
  if (typeof onError !== 'function') {
    throw new Error('onError prop must be a function');
  }

  if (typeof onPostSubmit !== 'function') {
    throw new Error('onPostSubmit prop must be a function');
  }

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title.trim() || !content.trim()) {
        throw new Error('Title and content cannot be empty');
      }

      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error(`Error submitting post: ${response.status}`);
      }

      const data = await response.json();
      console.log('Post submitted successfully:', data);
      setTitle('');
      setContent('');
      onPostSubmit({ title, content });
    } catch (error) {
      console.error('Error submitting post:', error);
      setError(error.message);
      onError(error.message);
      throw error; // re-throw the error
    }
  };

  return (
    <div className='submit-post-container'>
      <h1 className='submit-post-title'>Submit Post</h1>
      <form className='submit-post-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Title:</label>
          <input
            type="text"
            className='form-input'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Content:</label>
          <textarea
            className='form-textarea'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className='form-button'>Submit</button>
      </form>
      {error && <p className='form-error'>{error}</p>}
    </div>
  );
};

export default SubmitPost;