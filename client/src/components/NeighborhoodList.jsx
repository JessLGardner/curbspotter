import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NeighborhoodCard from './NeighborhoodCard';

const BodyStyle = styled.div`
  margin: 50px;
`
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
      <BodyStyle>
        <h1>List of Hoods</h1>
        {this.state.neighborhoods.map((neighborhood) => (
          <NeighborhoodCard {...neighborhood} key={neighborhood.id} neighborhood={neighborhood}/>)
        )}
      </BodyStyle>
    );
  }
}

export default NeighborhoodList;