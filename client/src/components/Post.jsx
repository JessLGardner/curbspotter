import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import axios from 'axios';


class Post extends Component {
  constructor(){
    super();
    this.state = {
      errors: '',      
      settings: false,
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
  
  _deletePost = async () => {
    try {
      const neighborhoodId = this.props.match.params.neighborhoodId;
      const id = this.props.match.params.id;
      const res = await axios.delete(`/api/neighborhoods/${neighborhoodId}/posts/${id}`)
      const redirect = !this.state.redirect
      this.setState({ redirect })
    } catch (err) {
      this.setState({error: err})
    }
  }

  _toggleSettings = () => {
    const settings = !this.state.settings;
    this.setState({settings});
  };

  render(){
    const neighborhoodId = this.props.match.params.neighborhoodId;
    const id = this.props.match.params.id;

    return (
      <div className="container p-container z-depth-1">
        <div className="post-title">
          <Link to={`/neighborhoods/${neighborhoodId}/posts`}>
            <span className="post-crumb">{this.state.neighborhood.name}  </span>
          </Link>
          <span className="title-crumb">>  {this.state.post.title}</span>
        </div>

        <img className="img" src={this.state.post.image_url} alt=""/>
        <p className="content">{this.state.post.content}</p>
          <br/>
          <br/>

        <div className="set-div">
          <div>
            <small><strong>location:</strong> {this.state.post.location}</small><br/>
            <small><strong>category:</strong> {this.state.post.category}</small><br/>
            <small><strong>posted:</strong> <TimeAgo date={this.state.post.created_at}/></small>
          </div>

            {this.state.post.user_id == this.state.user.id ? 
            <div>
              <button onClick={this._toggleSettings} className="btn waves-effect waves-light blue-grey lighten-2 z-depth-1 btn-set right">
                  <i className="material-icons tiny">settings</i>
                </button>
                    {!this.state.settings ? ''
                    :         
                      <div>
                        <br/>
                        <br/>
                        <Link to={`/neighborhoods/${neighborhoodId}/posts/${id}/edit`}><button className="btn waves-effect waves-light blue-grey lighten-2 z-depth-1 btn-small right">edit</button></Link>
                        <br/>
                        <br/>    
                        <button onClick={this._deletePost} className="btn waves-effect waves-light red lighten-2 z-depth-1 btn-small right">delete</button>
                          {this.state.redirect && (<Redirect to={`/neighborhoods/${neighborhoodId}/posts`}/>)}
                      </div>} 
            </div>
            :
            ''}
        </div>
      </div>
    );
  }
}

export default Post;