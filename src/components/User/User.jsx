import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, id, phone} = user;
    // console.log(user)
    return (
        <div style={{'border': "solid 2px orange", 'borderRadius': '10px', 'padding': '15px', 'marginBottom': '15px' }}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <button><Link to={`/users/${id}`}>Show Details</Link></button>
        </div>
    );
};

export default User;