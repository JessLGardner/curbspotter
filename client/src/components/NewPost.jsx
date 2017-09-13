import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const NewPostStyle = styled.div`
  margin: 20px;
`

class NewPost extends Component {
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

  _editPost = async (e) => {
    e.preventDefault();
    const post = this.state.post
    const neighborhoodId = this.props.match.params.neighborhoodId;
    // const id = this.props.match.params.id;
    await axios.post(`/api/neighborhoods/${neighborhoodId}/posts`, post)
    
    const redirect = !this.state.redirect
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
  
    return (
      <NewPostStyle>
        <h1>New Post</h1>
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
            <label htmlFor="content">Image: </label>
            <input onChange={this._handleChange} type="text" name="image_url" value={this.state.post.image_url} />
          </div>
          <div>
            <label htmlFor="content">Location: </label>
            <input onChange={this._handleChange} type="text" name="location" value={this.state.post.location} />
          </div>
          <button>Submit</button>
        </form>
        {this.state.redirect && (<Redirect to={`/neighborhoods/${neighborhoodId}/posts`}/>)}
      </NewPostStyle>
    );
  }

}

export default NewPost;