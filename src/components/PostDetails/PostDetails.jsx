import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();

    return (
        <div style={{border: 'dotted 5px green', marginTop: '20px'}}>
            <h1>Post Details Here</h1>
            <h4>Title: {postDetails.title} </h4>
            <p>Details: {postDetails.body} </p>
        </div>
    );
};

export default PostDetails;