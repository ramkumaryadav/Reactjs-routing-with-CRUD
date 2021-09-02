import React from 'react';

const Error = () => {
    return (
        <>
         <div className="container">
         <div className="row">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <a href="/" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </a><a href="/contact" className="btn btn-danger btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                </div>
            </div>
        </div>
    </div>

         </div>
        </>
    )
}

export default Error;
