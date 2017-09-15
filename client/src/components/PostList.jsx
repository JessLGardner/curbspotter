import React, { Component } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import PostCard from './PostCard';

// const BodyStyle = styled.div`
//   margin: 50px;
// `

class PostList extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     posts: []
  //   }
  // }

  // componentWillMount(){
  //   this._fetchPosts();
  // }

  // _fetchPosts = async () => {
  //   const id = this.props.match.params.id;
  //   const res = await axios.get(`/api/neighborhoods/${id}/posts`);
  //   const posts = res.data;
  //   this.setState({posts});
  // }

  render() {
    return (
      // <BodyStyle>
      <div className="container p-list-container">
        {this.props.posts.map((post) => (
          <PostCard key={post.id} post={post} neighborhoodId={this.props.neighborhoodId}/>)
        )}
      {/* </BodyStyle> */}
      </div>
    );
  }
}  

PostList.defaultProps = {
  posts: []
}


export default PostList;