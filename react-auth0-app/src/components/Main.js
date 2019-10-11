import React from 'react';

const Main = props => {
    return(
        <>
        <p>Hello {props.name}, you are in the main component</p>
        <a href="/secret">Click Here to access Secret Page</a>
        {!props.auth.isAuthenticated() &&
        <div>
            <hr />
            Please login first
            <hr />
            <button onClick={props.auth.login}>Login</button>
        </div>
        }
        </>
    )
}

export default Main