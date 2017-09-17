import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostList from './PostList';


class Neighborhood extends Component {

  constructor(){
    super();
    this.state = {
      errors: '',      
      neighborhood: {},
      posts: []
    }
  }

  componentWillMount(){
    this._fetchNeighborhoodAndPosts();
  }

  _fetchNeighborhoodAndPosts = async () => {
    try {
      const id = this.props.match.params.id;
      const res = await axios.get(`/api/neighborhoods/${id}/posts`)
      // console.log(res);
      this.setState({
        neighborhood: res.data.neighborhood,
        posts: res.data.posts
      })
    } catch (err) {
      this.setState({error: err})
    }
  }

  render() {
    const id = this.props.match.params.id;
    
    return (
      <div className="container">
        <h4>{this.state.neighborhood.name}</h4>
        <p className="n-text">{this.state.neighborhood.description}</p>

        <Link to={`/neighborhoods/${id}/post/new`} className="btn waves-effect waves-light light-blue darken-1 z-depth-1 right">
          <small>make a post</small>
        </Link>
        <br/>
        <br/>
        <PostList posts={this.state.posts} neighborhoodId={this.props.match.params.id}/>
      </div>
    );
  }
}

export default Neighborhood;