import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav';
import NeighborhoodList from './components/NeighborhoodList';
import Neighborhood from './components/Neighborhood';
import Post from './components/Post';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/neighborhoods" component={NeighborhoodList}/>
          <Route exact path="/neighborhoods/:id/posts" component={Neighborhood}/>
          <Route exact path="/neighborhoods/:neighborhoodId/posts/:id" component={Post}/>
        </div>
      </Router>
    );
  }
}

export default App;
