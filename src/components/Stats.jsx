import React from 'react';
import PropTypes from 'prop-types';
import StatsImage from '../assets/images/Stats.png';
import styled, { css } from 'styled-components';


function Stats(props){

  const StatsContainer = styled.div`
    width: 1155px;
    height: 684px;
    margin: 0 auto;
    padding-top: 50px;
    background-image: url(${StatsImage});
    background-repeat: no-repeat;
    position: relative;
  `
  const MainContainer = styled.div`
    width: 320px;
    height: 300px;
    position: absolute;
    left: 420px;
    top: 220px;
    color: #4AB7AE;
    text-align: center;
  `
  const SmallContainer = styled.div`
    width: 90px;
    height: 100px;
    position: absolute;
    text-align: center;


    color: #4AB7AE;
    ${props => props.rank && css`
      left: 1010px;
      top: 330px;
      width: 90px;
      height: 100px;
      font-size: 60px;
      padding-top: 15px;
    `}
  `



  function getLetterData(requestType){
    let currentRound = props.currentRound - 1;
    if(props.stats.roundStats.length > 0){
      if(requestType === 'correct'){
        if(currentRound > -1){
          return props.stats.roundStats[currentRound].lettersCorrect
        }
      } else if( requestType === 'incorrect'){
        if(currentRound > -1){
          return props.stats.roundStats[currentRound].lettersIncorrect
        }
      } else if(requestType === 'rank'){
        if(currentRound > -1){
          return props.currentRound;
        }
      }
    } else {
      return <div></div>
    }
  }


  return (
    <StatsContainer>
      <MainContainer>
        <h2>Your Last Round:</h2>
        <br/>
        <h4>Letters Correct: {getLetterData('correct')}</h4>
        <h4>Letters Incorrect: {getLetterData('incorrect')}</h4>
        <h4>Time: </h4>
        <h4>Words Per Minute: </h4>
      </MainContainer>
      <SmallContainer rank>
        {getLetterData('rank')}
      </SmallContainer>
    </StatsContainer>
  );
}


export default Stats;
