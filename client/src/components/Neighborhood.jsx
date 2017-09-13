import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import PostList from './PostList';



const NeighborhoodStyle = styled.div`
  padding: 20px;
`

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
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/neighborhoods/${id}/posts`)
    this.setState({
      neighborhood: res.data.neighborhood,
      posts: res.data.posts
    })
    console.log(this.state)
  }

  render() {
    return (
      <NeighborhoodStyle>
        <h1>{this.state.name}</h1>
        <h4>{this.state.description}</h4>
        {/* <PostList/> */}
      </NeighborhoodStyle>
    );
  }
}

export default Neighborhood;