import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { saveAuthTokens } from '../util';


class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      redirect: false
    }
  }

  _signIn = async (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    const res = await axios.post('/auth/sign_in', payload);
    saveAuthTokens(res.headers);
    this.setState({redirect: true})
  }

  _handleChange = (e) => {
    const newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    if (this.state.redirect){
      return <Redirect to="/neighborhoods" />
    }
    return (
      <div>
        <form onSubmit={this._signIn}>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input onChange={this._handleChange} type="text" name="email" value={this.state.email}/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
          </div>
          <button>Sign In</button>
          <Link to='/signup'>Sign Up</Link>
        </form>
      </div>
    );
  }
}

export default SignIn;