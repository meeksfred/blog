import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';

class PostList extends React.Component {

  // components are generally responsible for fetching data they need by calling
  // an action creator
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>{this.props.posts}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.blogPosts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
