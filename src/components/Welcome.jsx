import React from 'react';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/images/Welcome.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const WelcomeContainer = styled.div`
  width: 1155px;
  height: 684px;
  background-image: url(${WelcomeImage});
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  color: #EFCB8C;
  font-size: 30px;
  background-repeat: no-repeat;
`;

const EnterButton = styled.button`
  height: 50px;
  width: 80px;
  outline: none;
  border: 1px solid #EFCB8C;
  background-color: #0D8D9B;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100%{
      border: 1px solid red;
      box-shadow: 0px 0px 6px 0px red;
    }
  }
`

function Welcome(props){

  return (
    <WelcomeContainer>
      <h1>Welcome to typerSpace!</h1>
      <EnterButton>
        <Link to="/Command" style={{color: '#EFCB8C', textDecoration: 'none', fontSize: '14px'}}>Let's Begin</Link>
      </EnterButton>
    </WelcomeContainer>
  );
}


export default Welcome;
