import React from "react";
import PropTypes from "prop-types";
import TrainingImage from "./../assets/images/Training.png";
import { connect } from "react-redux";
import constants from "./../constants";
import styled, { css } from "styled-components";
import L0 from "./../assets/images/hands L0.png";
import R0 from "./../assets/images/hands R0.png";
import L1 from "./../assets/images/hands L1.png";
import R1 from "./../assets/images/hands R1.png";
import L2 from "./../assets/images/hands L2.png";
import R2 from "./../assets/images/hands R2.png";
import L3 from "./../assets/images/hands L3.png";
import R3 from "./../assets/images/hands R3.png";
import R4 from "./../assets/images/hands R4.png";
import L4 from "./../assets/images/hands L4.png";
import R5 from "./../assets/images/hands R5.png";
import L5 from "./../assets/images/hands L5.png";
import { Link } from "react-router-dom";
const { c } = constants;

const WelcomeContainer = styled.div`
  width: 1155px;
  height: 684px;
  margin: 0 auto;
  padding-top: 50px;
  background-image: url(${TrainingImage});
  background-repeat: no-repeat;
`;

const BookContainer = styled.div`
  font-family: "Julius Sans One", sans-serif;
  width: 484px;
  height: 400px;
  margin: 0 auto;
  margin-top: -36px;
  display: flex;
  justify-content: space-between;
`;

const InnerBook = styled.div`
  width: 200px;
  height: 400px;
  word-wrap: break-word;
  font-size: 30px;
  padding: 2px;
  letter-spacing: 4px;
  line-height: 50px;
  padding-left: 20px;
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
  cursor: pointer;
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
      box-shadow: 0px 0px 40px 5px rgba(255, 20, 147, 0.3);
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

const Span = styled.span`
  color: red;
  text-decoration: underline;
`;

function Training(props) {
  let handContent;
  function getHandContent(letter) {
    if (
      letter === "f" ||
      letter === "g" ||
      letter === "t" ||
      letter === "b" ||
      letter === "v" ||
      letter === "r"
    ) {
      return (
        <div>
          <img alt="hand" src={L2} />
          <img alt="hand" src={R0} />
        </div>
      );
    } else if (
      letter === "y" ||
      letter === "h" ||
      letter === "n" ||
      letter === "u" ||
      letter === "j" ||
      letter === "m"
    ) {
      return (
        <div>
          <img alt="hand" src={L0} />
          <img alt="hand" src={R2} />
        </div>
      );
    } else if (letter === "e" || letter === "d" || letter === "c") {
      return (
        <div>
          <img alt="hand" src={L3} />
          <img alt="hand" src={R0} />
        </div>
      );
    } else if (letter === "w" || letter === "s" || letter === "x") {
      return (
        <div>
          <img alt="hand" src={L4} />
          <img alt="hand" src={R0} />
        </div>
      );
    } else if (letter === "q" || letter === "a" || letter === "z") {
      return (
        <div>
          <img alt="hand" src={L5} />
          <img alt="hand" src={R0} />
        </div>
      );
    } else if (letter === "i" || letter === "k" || letter === ",") {
      return (
        <div>
          <img alt="hand" src={L0} />
          <img alt="hand" src={R3} />
        </div>
      );
    } else if (letter === "o" || letter === "l" || letter === ".") {
      return (
        <div>
          <img alt="hand" src={L0} />
          <img alt="hand" src={R4} />
        </div>
      );
    } else if (letter === "p" || letter === ";" || letter === "/") {
      return (
        <div>
          <img alt="hand" src={L0} />
          <img alt="hand" src={R5} />
        </div>
      );
    } else if ((letter = " ")) {
      return (
        <div>
          <img alt="hand" src={L1} />
          <img alt="hand" src={R1} />
        </div>
      );
    } else {
      return <p>'error!'</p>;
    }
  }

  handDecider();

  function handDecider(letter) {
    if (!props.isTraining) {
      handContent = (
        <ButtonDiv>
          <Button main>
            <Link
              to="/Stats"
              style={{ textDecoration: "none", color: "#F0A513" }}
            >
              Stats
            </Link>
          </Button>
          <Button
            style={{ height: "80px", width: "140px" }}
            onClick={updateCurrentRound}
          >
            Start Round
          </Button>
          <Button>
            <Link
              to="/Command"
              style={{ textDecoration: "none", color: "#F0A513" }}
            >
              Command Room
            </Link>
          </Button>
        </ButtonDiv>
      );
    } else if (props.isTraining) {
      handContent = getHandContent(letter);
    }
  }

  let typingContentArray = props.levels[props.currentRound].split("");

  function getTypingContent(keyPressed) {
    if (props.isTraining) {
      let displayContent = [];
      for (let i = 0; i < typingContentArray.length; i++) {
        if (i === props.currentLetterPosition) {
          displayContent.push(<Span>{typingContentArray[i]}</Span>);
        } else {
          displayContent.push(<span>{typingContentArray[i]}</span>);
        }
      }
      let targetLetter = typingContentArray[props.currentLetterPosition];
      handDecider(targetLetter);
      return displayContent;
    } else {
      return "";
    }
  }

  document.onkeypress = function(e) {
    if (props.isTraining === true) {
      e = e || window.event;
      var charCode = e.keyCode || e.which;
      var charStr = String.fromCharCode(charCode);
      checkLetterInput(charStr);
      getTypingContent(charStr);
    }
  };

  function checkLetterInput(keyPressed) {
    let targetLetter = typingContentArray[props.currentLetterPosition];
    const { dispatch } = props;
    if (keyPressed === targetLetter) {
      const action = {
        type: c.UPDATE_CURRENT_LETTER,
      };
      const secondAction = {
        type: c.UPDATE_LETTERS_CORRECT,
      };
      dispatch(action);
      dispatch(secondAction);
      if (props.currentLetterPosition === typingContentArray.length - 1) {
        endRound();
      }
    } else if (keyPressed !== targetLetter) {
      const incorrectDispatch = {
        type: c.UPDATE_LETTERS_INCORRECT,
      };
      dispatch(incorrectDispatch);
    }
  }

  function updateCurrentRound() {
    const { dispatch } = props;
    const action = {
      type: c.NEW_ROUND,
    };
    dispatch(action);
  }

  let leftBookContent;
  let rightBookContent;

  if (props.currentRound > 0) {
    leftBookContent = <p>{getTypingContent()}</p>;
    rightBookContent = <p>{getTypingContent()}</p>;
  }

  function endRound() {
    const { dispatch } = props;
    const action = {
      type: c.END_ROUND,
    };
    dispatch(action);
  }

  return (
    <WelcomeContainer
      className="welcomeContainer"
      key={props.stats.roundStats[props.currentRound - 1]}
    >
      <BookContainer>
        <InnerBook left>{leftBookContent}</InnerBook>
        <InnerBook right>{rightBookContent}</InnerBook>
      </BookContainer>
      <HandsDiv>{handContent}</HandsDiv>
    </WelcomeContainer>
  );
}

export default connect()(Training);
