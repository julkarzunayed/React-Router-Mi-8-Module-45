import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const usersData = use(usersPromise);
    // console.log(usersData)    
    return (
        <div>
            <h2>This is Users 02</h2>
        </div>
    );
};

export default Users2;