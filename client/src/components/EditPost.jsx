import React, { Component } from 'react';

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
    }


  _handleChange = (e) => {
    const newState = {...this.state.post}
    newState[e.target.name] = e.target.value
    this.setState({
      post: newState
    })
  }

  render() {
    return (
      <div>
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditPost;