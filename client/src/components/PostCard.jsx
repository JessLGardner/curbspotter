import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// const PostCardStyle = styled.div`
//   width: 50%;
//   margin: 20px 0; 
//   padding: 5px 15px;
//   box-shadow: 1px 1px 8px black;
//   img {
//     max-width: 98%;
//   }
//   a {
//     text-decoration: none;
//   }
// `

const PostCard = (props) => {
  const id = props.neighborhoodId;
  const post = props.post;

  return (
    // <PostCardStyle>
    <div className="container p-container">
      <div className="p-card">
      <Link to={`/neighborhoods/${id}/posts/${post.id}`}>
      <img src={post.image_url} className="p-card-img" alt=""/>
        <h5>{post.title}</h5>
      </Link>
    </div>
    </div>
  );
};

export default PostCard;