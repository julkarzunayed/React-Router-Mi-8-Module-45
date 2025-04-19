import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UsersDetails2 from '../UsersDetails2/UsersDetails2';

const User = ({user}) => {
    const [vewMore, setVewMore] = useState(false);
    // const [loading, setLoading] = useState(false);
    const {name, email, id, phone} = user;

    // function loader () {
    //     setLoading(!loading)
    // }

    const userDetailsPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    // console.log(user)
    return (
        <div style={{'border': "solid 2px orange", 'borderRadius': '10px', 'padding': '15px', 'marginBottom': '15px' }}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <button><Link to={`/users/${id}`}>Show Details</Link></button>
            <button onClick={() => setVewMore(!vewMore)}>Vew {vewMore ? "Less" : "More"} </button>
            {
                vewMore && <Suspense fallback={<h2>Loading....</h2>}>
                    <UsersDetails2 userDetailsPromise={userDetailsPromise}></UsersDetails2>
                </Suspense>
                
            }
            
        </div>
    );
};

export default User;