import React from 'react';
import PropTypes from 'prop-types'; //type-checking props are passed to a component

const Post = ({ title, content }) => {
    return (
        <div className='post'>
            <h3 className='post-title'>{title}</h3>
            <p className='post-content'>{content}</p>
        </div>
    )
}
Post.propTRypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Post;