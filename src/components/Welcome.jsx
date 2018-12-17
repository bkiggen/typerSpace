import React from 'react';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/images/Welcome.png';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  width: 1155px;
  height: 684px;
  background-image: url(${WelcomeImage});
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  color: red;
  background-repeat: no-repeat;
`;

function Welcome(props){
  return (
    <WelcomeContainer>
      <h1>Welcome to typerSpace!</h1>
    </WelcomeContainer>
  );
}


export default Welcome;
