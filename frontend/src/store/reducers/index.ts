import { combineReducers } from '@reduxjs/toolkit';
import postsReducers from './posts';

export default combineReducers({
    posts: postsReducers
})