import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SplashStyle = styled.div`
margin: 50px;
button {
  background-color: teal;
  color: white;
  width: 25%;
  height: 35px;
}
`

const Splash = () => {
  return (
    <SplashStyle>

      <Link to='/signUp'><button>Sign Up</button></Link>
      <br/>
      <br/>
      <Link to='/signIn'><button>Sign In</button></Link>
      <br/>
      <br/>
      <Link to='/neighborhoods'><button>Guest</button></Link>

    </SplashStyle>
  );
};

export default Splash;