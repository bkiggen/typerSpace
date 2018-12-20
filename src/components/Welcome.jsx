import React from 'react';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/images/Welcome.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import usaShip from './../assets/images/lander.png';

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
  position: relative;
`;

const Button = styled.button`
  height: 60px;
  width: 120px;
  outline: none;
  border: 1px solid #EFCB8C;
  background-color: #0D8D9B;
  color: #F0A513;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 30px;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100%{
      border: 1px solid #FC9FDF;
      box-shadow: 0px 0px 600px 100px rgba(255,20,147, .5);
    }
  }
`

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
      box-shadow: 0px 0px 600px 600px rgba(255,20,147, .2);
    }
  }
`

function Welcome(props){

  return (
    <WelcomeContainer>
      <h1>Welcome to typerSpace!</h1>
      <Button>
        <Link to="/Command" style={{color: '#EFCB8C', textDecoration: 'none', fontSize: '18px'}}>Let's Begin</Link>
      </Button>

    </WelcomeContainer>
  );
}


export default Welcome;
