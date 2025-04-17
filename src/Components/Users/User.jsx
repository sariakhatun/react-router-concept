import React, { Suspense, useState } from 'react';
import './User.css'
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UseDetails2/UserDetails2';
const User = ({user}) => {

    let [showInfo,setShowInfo] = useState(false)
    let [visitHome,setVisitHome] = useState(false)
    let location = useLocation();
    console.log(location)
    let {name,email,phone,id}=user;
    let userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
    if(visitHome){
        return <Navigate to="/mobiles"></Navigate>
    }
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>Email :{email} </p>
            <p><small>Phone : {phone}</small></p>
            <Link to={`/users/${id}`}>show details</Link>
            <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Detail'} info</button>
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=>setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;