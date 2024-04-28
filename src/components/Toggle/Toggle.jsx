import React from 'react';
import styled from 'styled-components';


export const ToggleContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 25px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'comic-sans', sans-serif;
`;

export const HiddenToggle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledToggle = styled.span`
  position: absolute;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.checked ? '#FF9900' : '#ccc'};
  transition: .4s;
  border-radius: 25px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2.5px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${props => props.checked ? 'translateX(26px)' : 'translateX(0)'};
  }
`;



const Toggle = ({ disabled, checked, onChange, name, value, id }) => {
  return (
    <ToggleContainer>
      <HiddenToggle 
        id={id}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      <StyledToggle checked={checked} disabled={disabled} />
    </ToggleContainer>
  );
};

export default Toggle;
