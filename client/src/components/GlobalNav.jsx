import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Nav = styled.div`
  width: 95%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: grey;
  box-shadow: 0px 1px 3px black;
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`

class GlobalNav extends Component {
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
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };

  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <div>
            <Link to="/neighborhoods"><h2>curbspottr</h2></Link>
          </div>
          <div>
            <span>{this.state.user.nickname} </span> |
            <Link to='#' onClick={this._logOut}> log out</Link>
          </div>
        </Nav>
      );
    } 
    return (
      <Nav>
        <div>
          <Link to="/neighborhoods"><h2>curbspottr</h2></Link>
        </div>
        <div>
          <Link to="/signup">sign up </Link> |
          <Link to="/signin"> log in</Link>
        </div>
      </Nav>
    );
  }
}
export default GlobalNav;