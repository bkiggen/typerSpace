import React from 'react';
import PropTypes from 'prop-types';
import TrainingImage from './../assets/images/Training.png';
import styled, { css } from 'styled-components';

const WelcomeContainer = styled.div`
  width: 1155px;
  height: 684px;
  margin: 0 auto;
  padding-top: 50px;
  background-image: url(${TrainingImage});
  background-repeat: no-repeat;
`;

const BookContainer = styled.div`
  width: 490px;
  height: 400px;
  margin: 0 auto;
  margin-top: -36px;
  display: flex;
  justify-content: space-between;
  `
const InnerBook = styled.div`
  width: 220px;
  height: 400px;
  padding: 2px;
  word-wrap: break-word;
  font-size: 20px;
  letter-spacing: 2px;
`

function Training(props){
  return (
    <WelcomeContainer className="welcomeContainer">
      <BookContainer>
        <InnerBook>
          <p></p>
        </InnerBook>
        <InnerBook></InnerBook>
      </BookContainer>
    </WelcomeContainer>
  );
};


export default Training;
