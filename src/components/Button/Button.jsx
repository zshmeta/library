// eslint-disable-next-line
import React from 'react';
import { StyledButton } from './Button.styled';



// eslint-disable-next-line
const Button = ({ text, onClick, disabled, active, mode = 'dark' }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      active={active}
      mode={mode}
    >
      {text || 'Button'}
    </StyledButton>
  );
};

export default Button;
