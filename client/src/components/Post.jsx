import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(){
    super();
    this.state = {
      post: {}
    }
  }

  componentWillMount(){
    this._fetchPosts();
  }

  _fetchPosts = async () => {
    const id = this.props.match.params.neighborhood.id;
    const post = this.props.match.params.id
    const res = await axios.get(`/api/neighborhoods/${id}/posts/${post.id}`)
    this.setState({
      post: res.data.post
    })
    console.log(this.state)

  }

  render() {
    return (
      <div>
        fuck everything react
      </div>
    );
  }
}

export default Post;