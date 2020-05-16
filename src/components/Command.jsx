import React from "react";
import PropTypes from "prop-types";
import CommandImage from "../assets/images/Command.png";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinkContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 94%;
  height: 285px;
  display: flex;
  justify-content: space-between;
  font-family: "Julius Sans One", sans-serif;
`;

const LinkDiv = styled.div`
  height: 285px;
  text-align: center;
  margin-top: 100px;

  ${(props) =>
    props.primary &&
    css`
      width: 270px;
    `}
  ${(props) =>
    props.secondary &&
    css`
      width: 470px;
      margin-right: 50px;
    `}
  ${(props) =>
    props.tertiary &&
    css`
      width: 250px;
    `}
`;

const NavText = styled.div`
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  &:hover {
    animation: hover 1s 1;
    animation-fill-mode: forwards;
  }
  @keyframes hover {
    100% {
      color: rgba(255, 20, 147, 0.9);
    }
  `;

function Command(props) {
  return (
    <div className="welcomeContainer">
      <style jsx>{`
        .welcomeContainer {
          width: 1155px;
          height: 684px;
          margin: 0 auto;
          padding-top: 50px;
          background-image: url(${CommandImage});
          background-repeat: no-repeat;
        }
      `}</style>
      <LinkContainer>
        <LinkDiv primary>
          <Link
            to="/Stats"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <NavText>Statistics</NavText>
          </Link>
        </LinkDiv>
        <LinkDiv secondary>
          <Link
            to="/Training"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <NavText>Training</NavText>
          </Link>
        </LinkDiv>
        <LinkDiv tertiary>
          <Link
            to="/Battle"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <NavText>Battle</NavText>
          </Link>
        </LinkDiv>
      </LinkContainer>
    </div>
  );
}

export default Command;
