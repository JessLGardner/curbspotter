import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import GlobalNav from './components/GlobalNav';
import NeighborhoodList from './components/NeighborhoodList';
import Neighborhood from './components/Neighborhood';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/neighborhoods" component={NeighborhoodList}/>
          <Route exact path="/neighborhoods/:id" component={Neighborhood}/>
        </div>
      </Router>
    );
  }
}

export default App;
