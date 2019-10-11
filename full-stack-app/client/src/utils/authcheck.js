import React, { useEffect, useContext } from 'react';
import history from './history';
import Context from './context';
import * as ACTION_TYPES from '../store/actions/action_types';
import { connect } from 'react-redux';

const AuthCheck = () => {


    send_profile_to_db = (profile) => {
        const data = profile
        axios.post('/api/posts/userprofiletodb', data)
            .then(() => axios.get('/api/get/userprofilefromdb'), {params: {email: profile.profile.email}})
            .then(res => this.props.set_db_profile(res.data))
            .then(history.replace('/'))
    }

    const context = useContext(Context);

    useEffect(() => {
        if(context.authObj.isAuthenticated()){
            context.handleUserLogin();
            context.handleUserAddProfile(context.authObj.userProfile);
            connect.send_profile_to_db(context.authObj.userProfile);
            history.replace('/');
        }
        else{
            context.handleUserLogout();
            context.handleUserRemoveProfile();
            history.replace('/');
        }
    }, []);

    return(
        <div></div>
    )
}


function mapStateToProps(state){
    retrun {

    }
}


function mapDispatchToProps(dispatch){
    return {
        login_success: () => dispatch(ACTION_TYPES.login_success),
        login_failure: () => dispatch(ACTION_TYPES.login_failure),
        add_profile : () => dispatch(ACTION_TYPES.add_profile),
        remove_profile: () => dispatch(ACTION_TYPES.remove_profile),
        set_db_profile: (profile) => dispatch(ACTION_TYPES.set_db_profile(profile)),
        remove_db_profile: (profile) => dispatch(ACTION_TYPES.remove_db_profile(profile)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
