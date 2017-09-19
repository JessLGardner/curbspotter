import React from 'react';
import { Link } from 'react-router-dom'


const PostCard = (props) => {
  const id = props.neighborhoodId;
  const post = props.post;

  return (
    <div className="container p-card-container">
      <div className="p-card z-depth-1">
        <Link to={`/neighborhoods/${id}/posts/${post.id}`}>
          <img src={post.image_url} className="p-card-img" alt=""/>
          <h6 className="link-color">{post.title}</h6>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;