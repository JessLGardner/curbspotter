import React, { Component } from 'react';
import PostCard from './PostCard';


class PostList extends Component {

  render() {
    return (
      <div className="container p-list-container">
          {this.props.posts.map((post) => (
            <PostCard key={post.id} post={post} neighborhoodId={this.props.neighborhoodId}/>)
          )}
     </div>
    );
  }
}  

PostList.defaultProps = {
  posts: []
}

export default PostList;