import { combineReducers } from 'redux';

const blogPostsReducer = (blogPosts = [], action) => {
  console.log(action);
  if ( action.type === 'FETCH_POSTS' ) {
    console.log('here');
    return action.payload;
  }

  return blogPosts;
}

export default combineReducers({
  blogPosts: blogPostsReducer
});
