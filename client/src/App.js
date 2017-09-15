import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav';
import Splash from './components/Splash';
import NeighborhoodList from './components/NeighborhoodList';
import Neighborhood from './components/Neighborhood';
import Post from './components/Post';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';
import {setAxiosDefaults} from './util';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css'



class App extends Component {

  componentWillMount(){
    setAxiosDefaults()
  }

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={Splash}/>
          <Route exact path="/users/:id" component={UserProfile}/>
          <Route exact path="/neighborhoods" component={NeighborhoodList}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/neighborhoods/:id/posts" component={Neighborhood}/>
          <Route exact path="/neighborhoods/:neighborhoodId/post/new" component={NewPost}/>         
          <Route exact path="/neighborhoods/:neighborhoodId/posts/:id" component={Post}/>
          <Route exact path="/neighborhoods/:neighborhoodId/posts/:id/edit" component={EditPost}/>
        </div>
      </Router>
    );
  }
}

export default App;
