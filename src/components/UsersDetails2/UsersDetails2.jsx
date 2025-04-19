import React, { use } from 'react';

const UsersDetails2 = ({userDetailsPromise}) => {
    const userData = use(userDetailsPromise);
    const {website, username, company} = userData;
    // console.log(userData)
    return (
        <div>
            <p>User name: {username}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default UsersDetails2;<h3>Name: </h3>