import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import usaShip from "./../assets/images/lander.png";
import { connect } from "react-redux";
import constants from "./../constants";
import BucolicImage from "./../assets/images/bucolic.png";
const { c } = constants;

const BattleDiv = styled.div`
  width: 1155px;
  height: 684px;
  margin: 0 auto;
  padding-top: 50px;
  background-repeat: no-repeat;
  position: relative;
  font-family: "Julius Sans One", sans-serif;
`;

const Canvas = styled.div`
  width: 1155px;
  height: 684px;
  overflow: hidden;
  display: flex;
`;

const Half = styled.div`
  ${(props) =>
    props.left &&
    css`
      width: 50%;
      height: 100%;
      position: relative;
      background-image: url(${BucolicImage});
    `}
  ${(props) =>
    props.right &&
    css`
      background-color: #cdeeaa;
      color: #520000;
      width: 50%;
      height: 100%;
      font-size: 28px;
      padding: 10px;
      text-align: center;
    `}
`;

const Lander = styled.img`
  position: absolute;
  animation: wiggle 2s 18 linear;
  @keyframes wiggle {
    25% {
      transform: rotateZ(5deg);
    }
    75% {
      transform: rotateZ(-5deg);
    }
  }
`;

const Button = styled.button`
  height: 60px;
  width: 120px;
  outline: none;
  border: 1px solid #fc9fdf;
  background-color: #6c2b15;
  color: #f0a513;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 50px;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100% {
      border: 1px solid #fc9fdf;
      box-shadow: 0px 0px 600px 100px rgba(255, 20, 147, 0.5);
    }
  }
`;

const Drop = styled.div`
  animation: drop 90000ms;
  animation-fill-mode: forwards;
  position: absolute;
  @keyframes drop {
    0% {
      top: -100px;
      left: 211px;
    }
    100% {
      top: 505px;
      left: 211px;
    }
  }
`;

const Span = styled.span`
  color: red;
  text-decoration: underline;
`;

function Battle(props) {
  const { dispatch } = props;

  let typingContentString = `No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than mans and yet as mortal as his own that as men busied themselves about their various concerns they were scrutinised and studied perhaps almost as narrowly as a man with a microscope might scrutinise the transient creatures that swarm and multiply in a drop of water With infinite complacency men went to and fro over this globe about their little affairs, serene in their assurance of their empire over matter`;
  let typingContentArray = typingContentString.split("");

  document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = e.keyCode || e.which;
    var charStr = String.fromCharCode(charCode);
    checkLetterInput(charStr);
  };

  function getTypingContent(keyPressed) {
    let displayContent = [];
    for (let i = 0; i < typingContentArray.length; i++) {
      if (i === props.currentLetterPosition) {
        displayContent.push(<Span>{typingContentArray[i]}</Span>);
      } else {
        displayContent.push(<span>{typingContentArray[i]}</span>);
      }
    }
    let targetLetter = typingContentArray[props.currentLetterPosition];
    return displayContent;
  }

  function checkLetterInput(keyPressed) {
    let targetLetter = typingContentArray[props.currentLetterPosition];
    if (keyPressed === targetLetter) {
      //update state
      const action = {
        type: c.UPDATE_CURRENT_LETTER,
      };
      dispatch(action);
      if (props.currentLetterPosition === typingContentArray.length - 1) {
        endOfGame();
      }
    } else if (keyPressed !== targetLetter) {
    }
  }

  let GameContent = (
    <Canvas>
      <Half left>
        <Drop>
          <Lander src={usaShip} />
        </Drop>
      </Half>
      <Half right>{getTypingContent()}</Half>
    </Canvas>
  );

  function startGame() {
    setTimeout(function() {
      if (props.currentLetterPosition < 10) {
        endOfGame("lose");
      } else {
        endOfGame("win");
      }
    }, 90000);
  }

  startGame();

  function endOfGame(type) {
    if (type === "win") {
      console.log("win");
      GameContent = (
        <div>
          Thank you, kind soul. You've saved us once again from the Americans.
        </div>
      );
    } else {
      console.log("lose");
      GameContent = (
        <div>
          Better keep training! The Americans have landed and they're going to
          start charging you for EVERYTHING.
        </div>
      );
    }
  }

  return <BattleDiv>{GameContent}</BattleDiv>;
}

export default connect()(Battle);
