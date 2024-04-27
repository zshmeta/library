import styled, { css } from 'styled-components';



export const StyledButton = styled.button`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  font-size: 13px;
  width: 130px;
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  border: none;
  padding: 1em;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  text-transform: uppercase;
  position: relative;
  transition: all 0.5s ease;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${props => props.active ? `0 0 0 2px ${props.mode === 'light' ? 'darkblue' : '#FF9900'} inset` : `0 2px 5px ${props.mode === 'light' ? '#FF9900' : 'darkblue'}`};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
    transition: width 0.5s ease;
    // z-index: -1;
  }

  &:hover {
    color: ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
    box-shadow: 0 1px 3px ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
    &::before {
      width: 100%;
    }
  }

  &:active {
    box-shadow: 0 0 0 2px ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'} inset;
  }

  ${props => props.disabled && css`
    background-color: #e0e0e0; 
    color: #9e9e9e; /* Dark grey text */
    cursor: not-allowed;
    box-shadow: none;
    &::before {
      background-color: #c7c7c7; /* Light grey underline */
    }
  `}
`;