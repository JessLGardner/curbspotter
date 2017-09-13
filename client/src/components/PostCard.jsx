import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const PostCardStyle = styled.div`
  width: 50%;
  margin: 20px 0; 
  padding: 5px 15px;
  box-shadow: 1px 1px 8px black;
  img {
    max-width: 98%;
  }
  a {
    text-decoration: none;
  }
`

const PostCard = (props) => {
  const id = props.neighborhoodId;
  const post = props.post;

  return (
    <PostCardStyle>
      <img src={post.image_url} alt=""/>
      <Link to={`/neighborhoods/${id}/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
    </PostCardStyle>
  );
};

export default PostCard;