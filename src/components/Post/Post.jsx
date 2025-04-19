import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    return (
        <div style={{border: 'solid 2px orange', margin: '9px', borderRadius: '15px'}}>
            <p>{post.title}</p>
            <Link to={`/posts/${post.id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default Post;