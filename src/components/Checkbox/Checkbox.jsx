import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  color: ${props => props.disabled ? '#B0B0B0' : (props.mode === 'light' ? '#FF9900' : '#ffedd3')};
  text-transform: uppercase;
  margin: 5px; 
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.div`
  width: 13px;
  height: 13px;
  background: transparent;
  border: 2px solid ${props => props.checked ? 'darkblue' : (props.mode === 'light' ? 'darkblue' : '#FF9900')};
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px darkblue; 
  }

  ${props => props.disabled && css`
    border-color: #B0B0B0;
    cursor: not-allowed;
  `}

  ${props => props.lockedcheck && css`
    border-color: #B0B0B0;
    cursor: not-allowed;
    background: #F0F0F0;
  `}
`;


const ForbiddenMark = styled.span`
  display: ${props => props.forbidden ? 'block' : 'none'};
  font-size: 20px;
  color: red;
`;
const Checkmark = styled.span`
  display: ${props => props.checked || props.lockedcheck ? 'block' : 'none'};
  font-size: 20px;
  color: darkblue;
`;

const Checkbox = ({ label, disabled, mode = 'dark', name, value, id, forbidden, lockedcheck }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (disabled || forbidden || lockedcheck) {
      return;
    }
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <CheckboxContainer htmlFor={id} mode={mode} disabled={disabled || lockedcheck}>
      <HiddenCheckbox
        id={id}
        disabled={disabled || forbidden || lockedcheck}
        onChange={handleCheckboxChange}
        name={name}
        checked={checked || lockedcheck}
        value={value}
      />
      <StyledCheckbox mode={mode} checked={checked || lockedcheck} disabled={disabled || lockedcheck}>
        <Checkmark checked={checked} lockedcheck={lockedcheck}>✔</Checkmark>
        <ForbiddenMark forbidden={forbidden}>✖</ForbiddenMark>
      </StyledCheckbox>
      {label}
    </CheckboxContainer>
  );
};

export default Checkbox;
