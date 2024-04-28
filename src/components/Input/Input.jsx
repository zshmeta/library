import React from 'react';
import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  font-size: 13px;
  width: 530px;
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  border: none;
  padding: 1em;
  margin: 1em;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  position: relative;
  transition: all 0.5s ease;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  box-shadow: ${props => props.active ? `0 0 0 2px ${props.mode === 'light' ? 'darkblue' : '#FF9900'} inset` : `0 2px 5px ${props.mode === 'light' ? '#FF9900' : 'darkblue'}`};

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

  ${props => props.invalid && css`
    box-shadow: 0 0 15px red;
    transition: box-shadow 0.5s ease-in-out;
  `}

  ${props => props.valid && css`
    box-shadow: 0 0 15px limegreen;
    transition: box-shadow 0.5s ease-in-out;
  `}
`;



// eslint-disable-next-line
const Input = ({ placeholder, onChange, disabled, active, mode = 'dark', invalid, valid }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      active={active}
      mode={mode}
      invalid={invalid}
      valid={valid}
    />
  );
};

export default Input;