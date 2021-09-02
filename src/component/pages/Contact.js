import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container col-md-6">
                <div className="py-4">
                    <h1>Contact Page</h1>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Email ID" />
                        </div>
                      <br/>
                        <button type="submit" class="btn btn-primary col-md-12">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;
