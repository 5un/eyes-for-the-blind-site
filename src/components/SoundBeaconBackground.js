import React from 'react'
import styled, { keyframes } from 'styled-components';

const pulseKF = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 177, 255, 0.4);
    box-shadow: 0 0 0 0 rgba(0, 177, 255, 0.4);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 177, 255, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 50px rgba(0, 177, 255, 0);
      box-shadow: 0 0 0 50px rgba(0, 177, 255, 0);
      -webkit-box-shadow: 0 0 0 50px rgba(0, 177, 255, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(0, 177, 255, 0);
      box-shadow: 0 0 0 0 rgba(0, 177, 255, 0);
      -webkit-box-shadow: 0 0 0 0 rgba(0, 177, 255, 0);
  }
`

const Blinker = styled.div`
  position: absolute;
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #00B1FF;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 177, 255, 0.4);
  animation: ${pulseKF} 2s infinite;
  left: ${props => props.left};
  top: ${props => props.top};
`

const Background = styled.div`
  background-image: url('/images/interior-sobel.jpg');
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  left:0; 
  top: 0;
  z-index: -2;
`;

export default (props) => (
  <Background>
    <Blinker left="25%" top="35%" />
    <Blinker left="70%" top="30%" />
    <Blinker left="50%" top="80%" />
    <Blinker left="50%" top="50%" />
    <Blinker left="33%" top="45%" />
    <Blinker left="76%" top="87%" />
  </Background>
)
