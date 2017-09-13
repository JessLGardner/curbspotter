import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const EditPostStyle = styled.div`
  margin: 20px;
`


class EditPost extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      post: {
        title: '',
        content: '',
        image_url: '',        
        category: '',
        location: ''
      }
    }
  }

  componentWillMount(){
    const postId = this.props.match.params.id
    this._fetchPost()
  }

  _fetchPost = async () => {
  const neighborhoodId = this.props.match.params.neighborhoodId;
  const id = this.props.match.params.id;
  const res = await axios.get(`/api/neighborhoods/${neighborhoodId}/posts/${id}`)
  this.setState({
    post: res.data.post
  })
  console.log(res.data)
  }  

  _editPost = async (e) => {
    e.preventDefault();
    const post = this.state.post
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;

    const res = await axios.put(`/api/neighborhoods/${neighborhoodId}/posts/${id}`, post)
    this.setState({redirect: true})
    }


  _handleChange = (e) => {
    const newState = {...this.state.post}
    newState[e.target.name] = e.target.value
    this.setState({
      post: newState
    })
  }

  render() {
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;
  
    return (
      <EditPostStyle>
        <h1>Edit Post</h1>
        <form onSubmit={this._editPost}>
          <div>
            <label htmlFor="title">Title: </label>
            <input onChange={this._handleChange} type="text" name="title" value={this.state.post.title} />
          </div>
          <div>
            <label htmlFor="content">Content: </label>
            <input onChange={this._handleChange} type="text" name="content" value={this.state.post.content} />
          </div>
          <div>
            <label htmlFor="title">Category: </label>
            <select onChange={this._handleChange} type="text" name="category" value={this.state.post.category}> 
                <option>furniture</option>
                <option>kids</option>
                <option>misc</option>
                <option>pets</option>
                <option>construction</option>
                <option>fitness</option>
            </select>
          </div>
          <div>
            <label htmlFor="content">Location: </label>
            <input onChange={this._handleChange} type="text" name="location" value={this.state.post.location} />
          </div>
          <button>Submit</button>
        </form>
        {this.state.redirect && (<Redirect to={`/api/neighborhoods/${neighborhoodId}/posts/${id}`}/>)}
      </EditPostStyle>
    );
  }
}

export default EditPost;