import React from 'react';

const Button = props => {
    return(
        <button type="button" className="btn btn-primary btn-lg" onClick={props.action}>Sign In</button>
    )
}