import React from 'react'
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div style={{textAlign:"center",marginTop:"10%"}} >
                <h1>Error</h1>
                <h3>Page Not found!!!</h3>
                <NavLink className="btn btn-dark" to="/">Back To Homepage</NavLink>
            </div>
        </div>
    )
}

export default ErrorPage
