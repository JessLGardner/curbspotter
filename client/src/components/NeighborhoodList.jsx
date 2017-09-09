import React, { Component } from 'react';
import styled from 'styled-components';
import NeighborhoodCard from './NeighborhoodCard';

const BodyStyle = styled.div`
  margin: 50px;
`

class NeighborhoodList extends Component {
  render() {
    return (
      <BodyStyle>
        <h1>List of Hoods</h1>
        <NeighborhoodCard/>
      </BodyStyle>
    );
  }
}

export default NeighborhoodList;

