import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Post extends Component {
  constructor(){
    super();
    this.state = {
      neighborhood: {},
      post: []
    }
  }

  componentWillMount(){
    this._fetchPost();
  }

  _fetchPost = async () => {
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/neighborhoods/${neighborhoodId}/posts/${id}`)
    this.setState({
      neighborhood: res.data.neighborhood,
      post: res.data.post
    })
    console.log(res.data)

  }
  render(){
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;

    return (
      <div>
        <h2>{this.state.neighborhood.name} / {this.state.post.title}</h2>
        <h4>category: {this.state.post.category}</h4>
        <img src={this.state.post.image_url} alt=""/>
        <p>{this.state.post.content}</p>

        <Link to={`/neighborhoods/${neighborhoodId}/posts/${id}/edit`}>
          edit
        </Link>

         / delete
      </div>
    );
  }
}

export default Post;