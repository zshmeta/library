import React, { useState } from 'react';
import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
`;
export const TooltipText = styled.span`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  width: 120px;
  background-color: ${props => props.mode === 'light' ? '#A09E9E' : 'black'};
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: ${props => props.position === 'top' ? '125%' : 'auto'};
  top: ${props => props.position === 'bottom' ? '125%' : 'auto'};
  left: ${props => (props.position === 'right' ? '100%' : (props.position === 'left' ? 'auto' : '50%'))};
  right: ${props => props.position === 'left' ? '100%' : 'auto'};
  margin-left: ${props => props.position === 'right' ? '10px' : (props.position === 'left' ? '-130px' : '-60px')};
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: ${props => {
      if (props.position === 'top') return `${props.mode === 'light' ? '#A09E9E' : 'black'} transparent transparent transparent`;
      if (props.position === 'bottom') return `transparent transparent ${props.mode === 'light' ? '#A09E9E' : 'black'} transparent`;
      if (props.position === 'right') return `transparent transparent transparent ${props.mode === 'light' ? '#A09E9E' : 'black'}`;
      if (props.position === 'left') return `transparent ${props.mode === 'light' ? '#A09E9E' : 'black'} transparent transparent`;
    }};
    left: ${props => (props.position === 'right' ? 'auto' : (props.position === 'left' ? '100%' : '50%'))};
    right: ${props => props.position === 'right' ? '100%' : 'auto'};
    margin-left: ${props => props.position === 'right' ? '-5px' : 'auto'};
  }

  ${props => props.isVisible && `
    opacity: 1;
  `}
`;

const Tooltip = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <TooltipContainer onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <TooltipText isVisible={isVisible} position={position}>
        {text}
      </TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
