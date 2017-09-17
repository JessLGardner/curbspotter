import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    window.location.reload();
  };

  render() {
    const id = this.state.user.id

    if (this.state.loggedIn) {
      return (
        <nav>
          <div className="nav-wrapper grey darken-1">
            <Link to="/neighborhoods" className="brand-logo left">curbspottr</Link>
            <div className="right">
              <Link to={`/users/${id}`}>hey {this.state.user.nickname}   </Link> |
              <Link to='/' onClick={this._logOut}>   log out</Link>
            </div>
          </div>
        </nav>
      );
    } 
    return (
      <nav>
        <div className="nav-wrapper grey darken-1">
          <Link to="/neighborhoods"className="brand-logo left">curbspottr</Link>
          <div className="right">
            <Link to="/signup">sign up </Link> |
            <Link to="/signin"> log in</Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default GlobalNav;