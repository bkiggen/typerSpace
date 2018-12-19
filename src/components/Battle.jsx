import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import usaShip from './../assets/images/lander.png';


function Battle(props){

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
  background-color: red;
  overflow: hidden;
  position: relative;
`;

const Lander = styled.img`
  position: absolute;
  top: -200px;
  left: 400px;
`

  return (
    <BattleDiv>
      <Canvas>
        
      </Canvas>
    </BattleDiv>
  );
}


export default Battle;
