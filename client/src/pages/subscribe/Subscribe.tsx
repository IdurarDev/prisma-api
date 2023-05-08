import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Subscribe() {
    return (
        <Fragment>
            <h3>Welcome for you</h3>
            <div>subscribe here !</div>
            <Link to="/login">Return to login page</Link>
        </Fragment>
    )
}

export default Subscribe
