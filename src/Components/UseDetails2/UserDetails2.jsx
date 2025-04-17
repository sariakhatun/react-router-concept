import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    let {name,username}= use(userPromise)
    return (
        <div>
            <p><small>User Name : {username}</small></p>
            <p>Name :{name} </p>
            
        </div>
    );
};

export default UserDetails2;