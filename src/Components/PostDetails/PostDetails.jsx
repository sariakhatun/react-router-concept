import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    let post = useLoaderData()
    let navigate = useNavigate()
    //console.log(post)
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;