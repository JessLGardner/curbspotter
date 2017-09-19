import React, { Component } from 'react';
import axios from 'axios';
import NeighborhoodCard from './NeighborhoodCard';


class NeighborhoodList extends Component {

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
      <div className="container">      
        <h5>what's your fav neighborhood to scout treasures?</h5>
        {this.state.neighborhoods.map((neighborhood) => (
          <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood}/>)
        )}
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

export default NeighborhoodList;