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

  render() {
    return (
      <div>
        this is a user profile <br/>

        <h3>username: {this.state.user.nickname}</h3>
        <h3>name: {this.state.user.name}</h3>
        <h3>email: {this.state.user.email}</h3>

      </div>
    );
  }
}

export default UserProfile;