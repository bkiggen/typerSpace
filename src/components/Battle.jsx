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
    padding: 10px;
    font-size: 20px;
  `}
`

const Lander = styled.img`
  position: absolute;
  top: 5px;
  left: 221px;
  animation: wiggle 2s infinite linear;
  @keyframes wiggle {
    25%{
      transform: rotateZ(5deg)
    }
    75% {
      transform: rotateZ(-5deg)
    }
  }
`

const Button = styled.button`
  height: 60px;
  width: 120px;
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
      box-shadow: 0px 0px 600px 100px rgba(255,20,147, .5);
    }
  }
`

const Span = styled.span`
  color: red;
  text-decoration: underline;
`

function Battle(props){

  let typingContentString = `No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man’s and yet as mortal as his own; that as men busied themselves about their various concerns they were scrutinised and studied, perhaps almost as narrowly as a man with a microscope might scrutinise the transient creatures that swarm and multiply in a drop of water. With infinite complacency men went to and fro over this globe about their little affairs, serene in their assurance of their empire over matter. It is possible that the infusoria under the microscope do the same. No one gave a thought to the older worlds of space as sources of human danger, or thought of them only to dismiss the idea of life upon them as impossible or improbable. It is curious to recall some of the mental habits of those departed days. At most terrestrial men fancied there might be other men upon Mars, perhaps inferior to themselves and ready to welcome a missionary enterprise. Yet across the gulf of space, minds that are to our minds as ours are to those of the beasts that perish, intellects vast and cool and unsympathetic, regarded this earth with envious eyes, and slowly and surely drew their plans against us. And early in the twentieth century came the great disillusionment.`;
  let typingContentArray = typingContentString.split('');

  document.onkeypress = function(e){
    e = e || window.event;
    var charCode = e.keyCode || e.which;
    var charStr = String.fromCharCode(charCode);
    checkLetterInput(charStr);
  }

  let currentLetterPosition = 0;

  function getTypingContent(keyPressed){
    let displayContent = [];
    for(let i = 0; i < typingContentArray.length; i++){
      if(i === currentLetterPosition) {
        displayContent.push(<Span>{typingContentArray[i]}</Span>);
      } else {
        displayContent.push(<span>{typingContentArray[i]}</span>);
      }
    }
    let targetLetter = typingContentArray[currentLetterPosition];
    return displayContent;
  }

  function checkLetterInput(keyPressed){
    console.log(currentLetterPosition);
    console.log(keyPressed);
    let targetLetter = typingContentArray[currentLetterPosition];
    if(keyPressed === targetLetter){
      currentLetterPosition += 1;
      if(currentLetterPosition === typingContentArray.length - 1){
        endOfGame();
      }
    } else if (keyPressed !== targetLetter){
      //what will this beee?
    }
  };

  let GameContent = <Canvas><Half left><Lander src={usaShip}/></Half><Half right>{getTypingContent()}</Half></Canvas>

  let initialContent = <button onClick={startGame}>READY?</button>;

  function startGame(){
    initialContent = <div>poop</div>
  }

  function endOfGame(){
    GameContent = <div>Well Done! You've saved the planet or whatever! Now you can stop playing this game!</div>
  }

  return (
    <BattleDiv>
      {initialContent}
    </BattleDiv>
  );
}


export default Battle;
