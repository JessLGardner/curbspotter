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
      <div>

        <h3>username: {this.state.user.nickname}</h3>
        <h3>name: {this.state.user.name}</h3>
        <h3>email: {this.state.user.email}</h3>
        <br/>
        <br/>
        <a href='/'><button onClick={this._deleteProfile}>DELETE PROFILE</button></a>
      
      </div>
    );
  }
}

export default UserProfile;