import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const navigate = useNavigate();

    return (
        <div style={{border: 'solid 2px orange', margin: '9px', borderRadius: '15px'}}>
            <p>{post.title}</p>
            <Link to={`/posts/${post.id}`}><button>Post Details</button></Link>
            <button onClick={() => navigate(`/posts/${post.id}`) }>Details Of : {post.id}</button>
        </div>
    );
};

export default Post;