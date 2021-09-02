import React, { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

   const { id } = useParams();

   useEffect(() => {
       loadUsers();
   }, []);

   const loadUsers = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
    };

    return (
        <>
         <div className="container">
             <h1 className="display-4"> User ID: {id}</h1>
             <hr />
             <ul className="list-group w-50">
                 <li className="list-group-item">Name : {user.name}</li>
                 <li className="list-group-item">User Name : {user.username}</li>
                 <li className="list-group-item">Email : {user.username}</li>
                 <li className="list-group-item">Phone : {user.phone}</li>
                 <li className="list-group-item">Website : {user.website}</li>
             </ul><br/>
             <Link className="btn btn-danger" to="/">Back to Home</Link>
         </div>
        </>
    )
}

export default Users;
