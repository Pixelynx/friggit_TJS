import { combineReducers } from 'redux';
import { postsAreLoading, addPost } from './postReducer.js';

export default combineReducers({ postsAreLoading, addPost })
