import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { saveAuthTokens } from '../util';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      nickname: '',
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      redirect: false
    }
  }

  _signUp = async (e) => {
    e.preventDefault();
    const payload = {
      nickname: this.state.nickname,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    const response = await axios.post('/auth', payload);
    saveAuthTokens(response.headers);
    this.setState({redirect: true})
  }

  _handleChange = (e) => {
    const newState = {...this.state};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    if (this.state.redirect){
      return <Redirect to="/neighborhoods"/>
    }
    return (
      <div>
      <div className="container">
      <div className="container">
        <form onSubmit={this._signUp} className="z-depth-1">
          <div className="input-field col s8">
            <label htmlFor="nickname">username </label>
            <input onChange={this._handleChange} type="text" name="nickname" value={this.state.nickname} />
          </div>
          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
            <label htmlFor="name">first name </label>
          </div>
          <div className="input-field col s8">
            <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
            <label htmlFor="email">email </label>
          </div>
          <div className="input-field col s8">
            <input onChange={this._handleChange} type="password" name="password" value={this.state.password} />
            <label htmlFor="password">password  <small>  (8 character minimum)</small></label>
          </div>
          <div className="input-field col s8">
            <input onChange={this._handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation} />
            <label htmlFor="password">confirm password </label>
          </div>
          <br/>
         <button className="btn waves-effect waves-light light-blue lighten-1 z-depth-1">Sign Up</button>
          &nbsp;
          &nbsp;
         <Link to="/signin" className="btn waves-effect waves-light blue-grey lighten-2 z-depth-1">Sign In</Link>
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
                  </div>
    );
  }
}

export default SignUp;