import React from 'react';
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  text-transform: uppercase;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.checked ? (props.mode === 'light' ? 'darkblue' : '#FF9900') : 'transparent'};
  border: 2px solid ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.mode === 'light' ? '#FF9900' : 'darkblue'};
  }

  ::after {
    content: '${props => props.checked ? "✔" : ""}';
    font-size: 15px;
    color: ${props => props.mode === 'light' ? '#FFFFFF' : '#FF9900'};
  }
`;


const Checkbox = ({ label, onChange, disabled, mode = 'dark', name, checked, value, id }) => {
  return (
    <CheckboxContainer mode={mode} disabled={disabled}>
      <HiddenCheckbox
        id={id}
        disabled={disabled}
        onChange={onChange}
        name={name}
        checked={checked}
        value={value}
      />
      <StyledCheckbox mode={mode} checked={checked} />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
