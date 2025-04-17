import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    let users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>This is users page</h2>
            <div>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;