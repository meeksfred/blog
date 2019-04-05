import axios from 'axios';

// action creators are generally responsible for making (or initiating) API requests

export const fetchPosts = async () => {
  try {
    const response = await axios.get( 'https://jsonplaceholder.typicode.com/posts' );
    console.log(response);
    return {
      type: 'FETCH_POSTS',
      payload: response
    }
  }
  catch (error) {
    console.log(error);
  }
}
