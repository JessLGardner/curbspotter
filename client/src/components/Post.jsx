import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import TimeAgo from 'react-timeago'
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

    return (
      // <PostStyle>
      <div className="container p-container">
        <div className="post-title">
          <Link to={`/neighborhoods/${neighborhoodId}/posts`}>
            <span className="post-crumb">{this.state.neighborhood.name}  </span>
          </Link>
          <span className="title-crumb">>  {this.state.post.title}</span>
        </div>
        <img className="img" src={this.state.post.image_url} alt=""/>
        <p>{this.state.post.content}</p><br/>
        <p>{this.state.post.location}</p>
        <small><strong>category:</strong> {this.state.post.category}</small><br/>
        <small><strong>posted:</strong> <TimeAgo date={this.state.post.created_at}/></small><br/>

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