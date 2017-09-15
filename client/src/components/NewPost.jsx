import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone'
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
      }, 
      uploadStatus: ''
    }
  }

  componentWillMount(){
    console.log(process.env)
  }

  _makePost = async (e) => {
    e.preventDefault();
    const post = this.state.post
    const neighborhoodId = this.props.match.params.neighborhoodId;
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

  _handleDrop = files => {
    // Push all the axios request promise into a single array
    const apiKey = process.env.REACT_APP_UPLOAD_API_KEY
    const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", uploadPreset); // Replace the preset name with your own
      formData.append("api_key", apiKey); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/dwtcophv6/image/upload", formData, {
        transformRequest: [function (data, headers) {
          // Do whatever you want to transform the data
          // console.log(headers)
          delete headers['access-token']
          delete headers['uid']
          delete headers['client']
          delete headers['expiry']
          delete headers['token-type']
          delete headers.common
          return data;
        }],
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        this.setState({uploadStatus: "picture upload successful!"})
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log(data);
        let post = {...this.state.post}
        post.image_url = fileURL
        this.setState({ post })
      })
    });
  
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
  }
  

  render() {
    const neighborhoodId = this.props.match.params.neighborhoodId;
  
    return (
      <NewPostStyle>
        <h1>New Post</h1>
        <form onSubmit={this._makePost}>
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
                <option></option>
                <option>construction</option>
                <option>fitness</option>
                <option>furniture</option>
                <option>kids</option>
                <option>misc</option>
                <option>pets</option>
            </select>
          </div>
          <div>
            <label htmlFor="content">Location: </label>
            <input onChange={this._handleChange} type="text" name="location" value={this.state.post.location} />
          </div>
          <div>
            <label htmlFor="content">Image: </label>
            <input onChange={this._handleChange} type="text" name="image_url" value={this.state.post.image_url} />
          </div>

          <Dropzone 
              onDrop={this._handleDrop} 
              multiple 
              accept="image/*">
            <p>Drop your files or click here to upload</p>
          </Dropzone>

          <p>{this.state.uploadStatus}</p>

          <button>Submit</button>
        </form>
        {this.state.redirect && (<Redirect to={`/neighborhoods/${neighborhoodId}/posts`}/>)}
      </NewPostStyle>
    );
  }

}

export default NewPost;