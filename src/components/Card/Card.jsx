import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
  background: ${props => props.mode === 'light' ? 'white' : '#393939'};
  color: ${props => props.mode === 'light' ? '#333' : '#FFF'};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;



const Card = ({ children, mode = 'dark' }) => (
  <StyledCard mode={mode}>
    {children}
  </StyledCard>
);

export default Card;
