import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NeighborhoodCardStyle = styled.div`
  width: 50%;
  margin: 20px 0; 
  padding: 5px 15px;
  box-shadow: 1px 1px 8px black;
`

const NeighborhoodCard = (props) => {
  const neighborhood = props.neighborhood;
  return (
    <NeighborhoodCardStyle>
      <Link to={`/neighborhoods/${neighborhood.id}/posts`}>
        <h3>{neighborhood.name}</h3>
      </Link>
    </NeighborhoodCardStyle>
  );
};

export default NeighborhoodCard;

