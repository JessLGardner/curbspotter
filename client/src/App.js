import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav';
import NeighborhoodList from './components/NeighborhoodList';
import Neighborhood from './components/Neighborhood';
import Post from './components/Post';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/neighborhoods" component={NeighborhoodList}/>
          <Route exact path="/neighborhoods/:id/posts" component={Neighborhood}/>
          <Route exact path="/neighborhoods/:neighborhoodId/posts/new" component={NewPost}/>         
          <Route exact path="/neighborhoods/:neighborhoodId/posts/:id" component={Post}/>
          <Route exact path="/neighborhoods/:neighborhoodId/posts/:id/edit" component={EditPost}/>

        </div>
      </Router>
    );
  }
}

export default App;
