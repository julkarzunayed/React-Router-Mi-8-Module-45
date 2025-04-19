import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
    const { name, website, company } = userData;
    return (
        <div style={{border: 'solid 2px yellow', borderRadius: "10px", padding: '10px', marginTop: '20px'}}>
            <h4>User Details Here</h4>
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            <div style={{border: "dashed 2px tomato"}}>
                <p style={{textAlign: 'center'}}>Wark in </p>
                <p>{company.name}</p>

            </div>
        </div>
    );
};

export default UserDetails;