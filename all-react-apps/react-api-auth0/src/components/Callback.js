import React, { useEffect } from 'react';
import image from '../images/generating.gif';
import './Callback.css'
import Auth  from '../Auth'

const Callback = props => {

    useEffect(() => {
        const auth = new Auth();
        auth.handleAuthentication();
    }, [])

    return(
        <div className="Main">
            <img src={image} alt="Loading.." />
        </div>
    )
}

export default Callback;