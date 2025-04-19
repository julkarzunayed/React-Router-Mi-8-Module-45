import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();

    return (
        <div style={{border: 'dotted 5px green', marginTop: '20px'}}>
            <h1>Post Details Here</h1>
            <h4>Title: {postDetails.title} </h4>
            <p>Details: {postDetails.body} </p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;