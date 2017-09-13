import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  width: 95%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: grey;
  box-shadow: 0px 1px 3px black;
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`

const GlobalNav = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>curbspottr</h1>
      </Link>
      <div>
        <Link to="/neighborhoods">neighborhoods</Link>
      </div>
    </Nav>
  );
};

export default GlobalNav;