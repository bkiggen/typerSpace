import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import usaShip from './../assets/images/lander.png';


const BattleDiv = styled.div`
  width: 1155px;
  height: 684px;
  margin: 0 auto;
  padding-top: 50px;
  background-repeat: no-repeat;
  position: relative;
`

const Canvas = styled.div`
  width: 1155px;
  height: 684px;
  overflow: hidden;
  display: flex;
`;

const Half = styled.div`

  ${props => props.left && css`
    background-color: blue;
    width: 50%;
    height: 100%;
    position: relative;
  `}
  ${props => props.right && css`
    background-color: green;
    width: 50%;
    height: 100%;
  `}

`


function Battle(props){

  document.onkeypress = function(e){
    e = e || window.event;
    var charCode = e.keyCode || e.which;
    var charStr = String.fromCharCode(charCode);
    console.log(charStr);

  }

  function checkLetterInput(keyPressed){
    let targetLetter = typingContentArray[props.currentLetterPosition];
    const { dispatch } = props;
    if(keyPressed === targetLetter){
      const action = {
        type: c.UPDATE_CURRENT_LETTER
      };
      const secondAction = {
        type: c.UPDATE_LETTERS_CORRECT
      };
      dispatch(action);
      dispatch(secondAction);
      if(props.currentLetterPosition === typingContentArray.length - 1){
        endRound();
      }
    } else if (keyPressed !== targetLetter){
      const incorrectDispatch = {
        type: c.UPDATE_LETTERS_INCORRECT
      }
      dispatch(incorrectDispatch);
    }
  };


const Lander = styled.img`
  position: absolute;
  top: 5px;
  left: 221px;
`

  return (
    <BattleDiv>
      <Canvas>
        <Half left>
          <Lander src={usaShip}/>
        </Half>
        <Half right></Half>
      </Canvas>
    </BattleDiv>
  );
}


export default Battle;
