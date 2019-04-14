import axios from 'axios';

// action creators are generally responsible for making (or initiating) API requests

export const fetchPosts = () => async dispatch => {
  const response = await axios.get( 'https://jsonplaceholder.typicode.com/posts' );

  dispatch({ type: 'FETCH_POSTS', payload: response })
};
