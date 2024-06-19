import React from 'react';

const submitPost = ({onError}) => {
    const handleSubmit = async () => {
        try {
            throw new Error("Submit failed");
        } catch (error) {
            onError(error.message);
        }
    }
    return (
        <form>
            <h2>Submit a New post</h2>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default submitPost;

