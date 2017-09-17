import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };

  _deleteProfile = async() => {
    try {
        const res = await axios.delete(`/auth`)
        this._logOut();
        return res.data
    }
    catch(err){
        console.log(err)
    }
}
  _logOut = async () => {
      console.log("CLICK");
      const response = await axios.delete("/auth/sign_out");
    };

  render() {
    return (
      <div className="container">
      <div className="container">
        <div className="u-card z-depth-1">
          <p><strong>username: </strong>{this.state.user.nickname}</p>
          <p><strong>name: </strong>{this.state.user.name}</p>
          <p><strong>email: </strong>{this.state.user.email}</p>
          <br/>
          <br/>
          <a href='/'><button onClick={this._deleteProfile} className="btn waves-effect waves-light red lighten-2 z-depth-1">delete profile</button></a>     
        </div>
      </div>
      </div>
    );
  }
}

export default UserProfile;