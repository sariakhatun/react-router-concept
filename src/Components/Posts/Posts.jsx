import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    let posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h2>these are my posts : {posts.length} </h2>
           <div>
           {
                posts.map(post => <Post key={posts.id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;