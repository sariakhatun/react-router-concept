import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    let users=use(userPromise)
    console.log(users)
    return (
        <div>
            <h2>This is users2</h2>
        </div>
    );
};

export default Users2;