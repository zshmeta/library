import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToTop = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToBottom = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const StyledAlert = styled.div`
  padding: 20px;
  color: white;
  background-color: ${props => props.type === 'error' ? 'red' : props.type === 'success' ? 'green' : props.type === 'warning' ? 'orange' : '#004085'};
  margin-bottom: 15px;
  border-radius: 4px;

  ${props => props.type === 'info' && css`
    background-color: #007bff;
    color: white;
  `}

  ${props => props.animatetop && css`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;
    animation: ${props.show ? slideInFromRight : slideOutToTop} 0.5s forwards;
  `}
  
  ${props => props.animatebottom && css`
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 10;
    animation: ${props.show ? slideInFromLeft : slideOutToBottom} 0.5s forwards;
  `}
`;

const Alerts = ({ type, show, animatetop, animatebottom, children }) => (
  <StyledAlert type={type} show={show} animatetop={animatetop} animatebottom={animatebottom}>
    {children}
  </StyledAlert>
);

export default Alerts;
