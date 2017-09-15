import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const NeighborhoodCardStyle = styled.div`
//   width: 50%;
//   margin: 20px 0; 
//   padding: 5px 15px;
//   box-shadow: 1px 1px 8px black;
//   a {
//     text-decoration: none;
//   }
// `

const NeighborhoodCard = (props) => {
  const neighborhood = props.neighborhood;
  return (
    // <NeighborhoodCardStyle>
    <div className="container n-container">
      <div className="n-card">
        <Link to={`/neighborhoods/${neighborhood.id}/posts`}>
          <h5>{neighborhood.name}</h5>
        </Link>
      </div>
    </div>
    // </NeighborhoodCardStyle>
  );
};

export default NeighborhoodCard;

