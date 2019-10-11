import React from 'react';

const Secret = (props) => {
    return(
        <div>
            <p>This is a secret area. Go back to <a href="/">Home</a></p>
            <button onClick={props.auth.logout}>Logout</button>
        </div>
    );
}

export default Secret;