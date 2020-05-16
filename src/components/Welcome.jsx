import React from "react";
import PropTypes from "prop-types";
import WelcomeImage from "../assets/images/Welcome.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import usaShip from "./../assets/images/lander.png";

const WelcomeContainer = styled.div`
  width: 1155px;
  height: 684px;
  background-image: url(${WelcomeImage});
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  color: #efcb8c;
  font-size: 30px;
  background-repeat: no-repeat;
  position: relative;
`;

const Button = styled.button`
  height: 60px;
  width: 120px;
  outline: none;
  border: 1px solid #efcb8c;
  background-color: #0d8d9b;
  color: #f0a513;
  font-size: 20px;
  border-radius: 4px;
  margin-top: 30px;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100% {
      border: 1px solid #fc9fdf;
      box-shadow: 0px 0px 100px 10px rgba(255, 20, 147, 0.3);
    }
  }
`;

const EnterButton = styled.button`
  height: 50px;
  width: 80px;
  outline: none;
  border: 1px solid #efcb8c;
  background-color: #0d8d9b;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100% {
      border: 1px solid red;
      box-shadow: 0px 0px 600px 600px rgba(255, 20, 147, 0.2);
    }
  }
`;

function Welcome(props) {
  return (
    <WelcomeContainer>
      <h1>Welcome to typerSpace!</h1>
      <Button>
        <Link
          to="/Command"
          style={{ color: "#EFCB8C", textDecoration: "none", fontSize: "18px" }}
        >
          Let's Begin
        </Link>
      </Button>
    </WelcomeContainer>
  );
}

export default Welcome;
