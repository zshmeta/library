import React from 'react';
import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
`;

export const TooltipText = styled.span`
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px; // half of the width to ensure it is centered
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
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
