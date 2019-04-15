import _ from 'lodash';
import axios from 'axios';

// action creators are generally responsible for making (or initiating) API requests

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // when calling an action creator within another action creator
  // you need to make to to dispatch the call. dispatch the function that returns its own dispatch
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach( id => dispatch(fetchUser(id)) );

  // console.log(Promise.all(userIds.map( async id => await dispatch(fetchUser(id)))));
  // async syntax ( I think )
}

export const fetchPosts = () => async dispatch => {
  const response = await axios.get( 'https://jsonplaceholder.typicode.com/posts' );

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await axios.get( `https://jsonplaceholder.typicode.com/users/${id}` );

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await axios.get( `https://jsonplaceholder.typicode.com/users/${id}` );
//
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// memoized method using lodash
