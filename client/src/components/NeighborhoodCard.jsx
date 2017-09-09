import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Neighborhood from './Neighborhood';

const NeighborhoodCardStyle = styled.div`
  width: 30%;
  margin: 20px 0; 
  padding: 5px 15px;
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
`;

const NeighborhoodCard = (props) => {
  const neighborhood = props.neighborhood;
  return (
    <NeighborhoodCardStyle>
      <h2>neighborhood card</h2>
        <Neighborhood/>
    </NeighborhoodCardStyle>
  );
};

export default NeighborhoodCard;





      // <Link to={`/artist/${artist.id}`}>
      //   <img src={artist.photo_url} alt={artist.name} />
      //   <h3>{artist.name}</h3>
      // </Link>

