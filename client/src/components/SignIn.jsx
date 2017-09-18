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
      <div className="container">
      <div className="container">
        <form onSubmit={this._signIn} className="z-depth-1">

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="email" value={this.state.email}/>
            <label htmlFor="email">email </label>
          </div>

          <div className="input-field col s8">
            <input onChange={this._handleChange} type="password" name="password" value={this.state.password} />
            <label htmlFor="password">password </label>
          </div>
            <br/>
          <button className="btn waves-effect waves-light blue-grey lighten-2 z-depth-1">Sign In</button>
            &nbsp;
            &nbsp;
          <Link to='/signup' className="btn waves-effect waves-light light-blue lighten-1 z-depth-1">Sign Up</Link>
        </form>
      </div>
      </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>      
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>      
            <br/>
            </div>
    );
  }
}

export default SignIn;