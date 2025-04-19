import React from 'react';
import { useLoaderData} from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const postData = useLoaderData();
    

    return (
        <div>
            <h2>All post are here</h2>
            {
                postData.map(post => <Post key={post.id} post={post}></Post>)
            }
            
        </div>
    );
};

export default Posts;