import React from 'react';
import PropTypes from 'prop-types';
import TrainingImage from './../assets/images/Training.png';
import styled, { css } from 'styled-components';
import L0 from './../assets/images/hands L0.png';
import R0 from './../assets/images/hands R0.png';
import L1 from './../assets/images/hands L1.png';
import R1 from './../assets/images/hands R1.png';
import L2 from './../assets/images/hands L2.png';
import R2 from './../assets/images/hands R2.png';
import L3 from './../assets/images/hands L3.png';
import R3 from './../assets/images/hands R3.png';
import R4 from './../assets/images/hands R4.png';
import L4 from './../assets/images/hands L4.png';
import R5 from './../assets/images/hands R5.png';
import L5 from './../assets/images/hands L5.png';

const WelcomeContainer = styled.div`
  width: 1155px;
  height: 684px;
  margin: 0 auto;
  padding-top: 50px;
  background-image: url(${TrainingImage});
  background-repeat: no-repeat;
`;

const BookContainer = styled.div`
  width: 484px;
  height: 400px;
  margin: 0 auto;
  margin-top: -36px;
  display: flex;
  justify-content: space-between;
  `;
const InnerBook = styled.div`
  width: 214px;
  height: 400px;
  word-wrap: break-word;
  font-size: 20px;
  letter-spacing: 2px;
`;

const HandsDiv = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Button = styled.button`
  height: 60px;
  width: 90px;
  outline: none;
  border: 1px solid #FC9FDF;
  background-color: #6C2B15;
  color: #F0A513;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 50px;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100%{
      border: 1px solid #FC9FDF;
      box-shadow: 0px 0px 6px 0px #FC9FDF;
    }
  }
`



function Training(props){

  function getHandContent(letter){
    if(letter === 'f' || letter === 'g' || letter === 't' || letter === 'b' || letter === 'v' || letter === 'r'){
      return (
      <div>
        <img src={L2}></img>
        <img src={R0}></img>
      </div>
    )
    } else if (letter = ' '){
      return (
      <div>
        <img src={L1}></img>
        <img src={R1}></img>
      </div>
    )
    } else if (letter === 'y' || letter === 'h' || letter === 'n' || letter === 'u' || letter === 'j' || letter === 'm') {
      return (
      <div>
        <img src={L0}></img>
        <img src={R2}></img>
      </div>
    )
    } else if (letter === 'e' || letter === 'd' || letter === 'c') {
      return (
      <div>
        <img src={L3}></img>
        <img src={R0}></img>
      </div>
    )
    } else if (letter === 'w' || letter === 's' || letter === 'x') {
      return (
      <div>
        <img src={L4}></img>
        <img src={R0}></img>
      </div>
    )
    } else if (letter === 'q' || letter === 'a' || letter === 'z') {
      return (
      <div>
        <img src={L5}></img>
        <img src={R0}></img>
      </div>
    )
    } else if (letter === 'i' || letter === 'k' || letter === ',') {
      return (
        <div>
          <img src={L0}></img>
          <img src={R3}></img>
        </div>
      )
      } else if (letter === 'o' || letter === 'l' || letter === '.') {
        return (
        <div>
          <img src={L0}></img>
          <img src={R4}></img>
        </div>
      )
      } else if (letter === 'p' || letter === ';' || letter === '/') {
        return (
        <div>
          <img src={L0}></img>
          <img src={R5}></img>
        </div>
      )
    }
  }

  let handContent;

  if ( 1 === 1 ) {
    handContent = <Button onClick={getHandContent}>Start Round</Button>
  }

  return (
    <WelcomeContainer className="welcomeContainer">
      <BookContainer>
        <InnerBook left>
          <p></p>
        </InnerBook>
        <InnerBook right>
          <p></p>
        </InnerBook>
      </BookContainer>
      <HandsDiv>
        {handContent}
      </HandsDiv>
    </WelcomeContainer>
  );
};


export default Training;
