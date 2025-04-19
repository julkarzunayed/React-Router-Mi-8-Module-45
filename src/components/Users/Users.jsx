import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const usersData = useLoaderData();
    // console.log(usersData)
    return (
        <div>
            <h2>Users data</h2>
            <div style={{ }}>
                {
                    usersData.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;