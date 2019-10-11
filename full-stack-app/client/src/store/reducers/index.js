import { combineReducers } from 'redux';
import AuthReducer  from './auth_reducer';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers({
    auth_reducer : AuthReducer,
    posts_reducer : PostsReducer
})
