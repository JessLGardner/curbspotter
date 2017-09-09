import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import GlobalNav from './components/GlobalNav';
import NeighborhoodList from './components/NeighborhoodList';


class App extends Component {

  constructor(){
    super();
    this.state = {
      errors: '',
      neighborhoods: []
    }
  }

  componentWillMount(){
    this._fetchNeighborhoods();
  }

  _fetchNeighborhoods = async () => {
    try {
      const res = await axios.get('/api/neighborhoods');
      const neighborhoods = res.data;
      this.setState({neighborhoods});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/neighborhoods" component={NeighborhoodList}/>
        </div>
      </Router>
    );
  }
}

export default App;
