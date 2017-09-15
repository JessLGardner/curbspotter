import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PostList from './PostList';



// const NeighborhoodStyle = styled.div`
//   padding: 20px;
// `

class Neighborhood extends Component {

  constructor(){
    super();
    this.state = {
      neighborhood: {},
      posts: []
    }
  }

  componentWillMount(){
    this._fetchNeighborhoodAndPosts();
  }

  _fetchNeighborhoodAndPosts = async () => {
    console.log("Fetching info!")
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/neighborhoods/${id}/posts`)
    console.log(res);
    this.setState({
      neighborhood: res.data.neighborhood,
      posts: res.data.posts
    })
  }

  render() {
    const id = this.props.match.params.id;
    
    return (
      // <NeighborhoodStyle>
      <div className="container">
        <h4>{this.state.neighborhood.name}</h4>
        <p className="n-text">{this.state.neighborhood.description}</p>

        <Link to={`/neighborhoods/${id}/post/new`}>
          <p>>>> make a new post</p>
        </Link>

        <PostList posts={this.state.posts} neighborhoodId={this.props.match.params.id}/>
      {/* // </NeighborhoodStyle> */}
      </div>
    );
  }
}

export default Neighborhood;