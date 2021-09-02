import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory(); 
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
       setUser({...user, [e.target.name]: e.target.value})
      // console.log(e.target.value);
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user); 
        history.push("/");
    };

    return (
        <>
           <br/>
            <div className="container border">
                <div className="row py-4">
                <h1 >Add User</h1>
                <hr/>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-row ">
                            <div className="form-group col-md-6 ">
                                <label for="inputEmail4">Name</label>
                                <input type="text" className="form-control" id="inputname" placeholder="Name" name="name" value={name} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputusername">User Name</label>
                                <input type="text" className="form-control" id="inputusername" placeholder="User Name" name="username" value={username} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputemail">Email ID</label>
                                <input type="text" className="form-control" id="inputemail" placeholder="Your Email ID" name="email" value={email} onChange={e => onInputChange(e)} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputphone">Phone Number</label>
                                <input type="text" className="form-control" id="inputphone" placeholder="Your Phone Number" name="phone" value={phone} onChange={e => onInputChange(e)} />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputurl">Website URL</label>
                                <input type="text" className="form-control" id="inputurl" placeholder="Your Website URL" name="website" value={website} onChange={e => onInputChange(e)} />
                            </div>
                            <br></br>
                            <div className="form-group col-md-12">
                                <button type="submit" className="btn btn-primary col-md-6">Add User</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUser;
