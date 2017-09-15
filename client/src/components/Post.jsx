import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';

// const PostStyle = styled.div`
//   margin: 20px;
//   a {
//     text-decoration: none;
//   }
// `

class Post extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      neighborhood: {},
      post: [],
      user: {}
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
      post: res.data.post,
      user: res.data.user
    })
    // console.log(res.data)
  }
  g
  _deletePost = async () => {
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;
    const res = await axios.delete(`/api/neighborhoods/${neighborhoodId}/posts/${id}`)
    const redirect = !this.state.redirect
    this.setState({ redirect })
  }

  render(){
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;
    // const user = current_user


    // <div class="col s12">
    //   <a href="#!" class="breadcrumb">First</a>
    //   <a href="#!" class="breadcrumb">Second</a>
    //   <a href="#!" class="breadcrumb">Third</a>
    // </div>

    return (
      // <PostStyle>
      <div className="container">
        <div>
          <Link to={`/neighborhoods/${neighborhoodId}/posts`} className="breadcrumb">
            <p>{this.state.neighborhood.name}</p>
          </Link>
          <p className="breadcrumb">{this.state.post.title}</p>
        </div>
        <img className="img" src={this.state.post.image_url} alt=""/>
        <p>{this.state.post.content}</p><br/>
        <p>{this.state.post.location}</p>
        <small>category: {this.state.post.category}</small><br/>
        <small>{this.state.post.created_at}</small><br/>

        {this.state.post.user_id == this.state.user.id ? 
        <div>
          <Link to={`/neighborhoods/${neighborhoodId}/posts/${id}/edit`}>edit</Link>
          <button onClick={this._deletePost}>delete</button>
          {this.state.redirect && (<Redirect to={`/neighborhoods/${neighborhoodId}/posts`}/>)}
        </div>
        :
        ''}
      </div>
      // </PostStyle>
    );
  }
}

export default Post;