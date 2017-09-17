import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import axios from 'axios';

class NewPost extends Component {
  constructor(){
    super();
    this.state = {
      errors: '',      
      redirect: false,
      uploadStatus: '',      
      post: {
        title: '',
        content: '',
        image_url: '',        
        category: '',
        location: ''
      }
    }
  }

  // componentWillMount(){
  //   console.log(process.env)
  // }

  _newPost = async (e) => {
    try {
      e.preventDefault();
      const post = this.state.post
      const neighborhoodId = this.props.match.params.neighborhoodId;
      await axios.post(`/api/neighborhoods/${neighborhoodId}/posts`, post)
    
      const redirect = !this.state.redirect
      this.setState({redirect: true})
    } catch (err) {
    this.setState({error: err})
    }
  }

  _handleChange = (e) => {
    const newState = {...this.state.post}
    newState[e.target.name] = e.target.value
    this.setState({
      post: newState
    })
  }

  //////////////////////// DRAG AND DROP /////////////////////////////////
  /////////////// Bilal Budhani @ blog.codeinfuse.com ///////////////////

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
        this.setState({uploadStatus: "image upload successful!"})
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
  //////////////////////// DRAG AND DROP /////////////////////////////////
  
  render() {
    const neighborhoodId = this.props.match.params.neighborhoodId;
  
    return (
      <div className="container">
        <h5 className="form-title">New Post</h5>

        <form onSubmit={this._newPost} className="z-depth-1">

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="title" value={this.state.post.title} />
            <label htmlFor="title">title</label>
          </div>

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="content" value={this.state.post.content} />
            <label htmlFor="content">content </label>
          </div>

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="location" value={this.state.post.location} />
            <label htmlFor="content">location </label>
          </div>

          <div className="input-field col s8">
            <select className="browser-default" onChange={this._handleChange} type="text" name="category" value={this.state.post.category}> 
                <option>construction</option>
                <option>fitness</option>
                <option>furniture</option>
                <option>kids</option>
                <option>misc</option>
                <option>pets</option>
            </select>
          </div>
            <label htmlFor="category">   choose category</label>
          <br/>
          <br/>
          <br/>
 
          {/* <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="image_url" value={this.state.post.image_url} />
            <label htmlFor="content">image url </label>
          </div> */}

          <div>
            <Dropzone 
                onDrop={this._handleDrop} 
                multiple 
                accept="image/*"
                className='dropzone'>
              <p className="p-form">drag and drop your image or click here to upload</p>
            </Dropzone>
            <br/>

            <span className="p-form">{this.state.uploadStatus}</span>
            <i className="material-icons tiny">check</i>
          </div>
            <br/>
          <div>
            <button className="btn waves-effect waves-light blue-grey lighten-2 z-depth-1">Submit<i className="material-icons md-18 right">send</i></button>
          </div>

        </form>

        {this.state.redirect && (<Redirect to={`/neighborhoods/${neighborhoodId}/posts`}/>)}
      </div>
    );
  }
  
}

export default NewPost;