import React from 'react';
import { Link } from 'react-router-dom'


const NeighborhoodCard = (props) => {
  const neighborhood = props.neighborhood;

  return (
    <div className="container n-container">
      <div className="n-card z-depth-1">
        <Link to={`/neighborhoods/${neighborhood.id}/posts`}>
          <h5>{neighborhood.name}</h5>
        </Link>
      </div>
    </div>
  );
};

export default NeighborhoodCard;