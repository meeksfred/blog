import axios from 'axios';

// action creators are generally responsible for making (or initiating) API requests

export const fetchPosts = () => async dispatch => {
  const response = await axios.get( 'https://jsonplaceholder.typicode.com/posts' );

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
  const response = await axios.get( `https://jsonplaceholder.typicode.com/users/${id}` );

  dispatch({ type: 'FETCH_USER', payload: response.data });
}
