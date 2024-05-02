// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledMain = styled.div`

`;

const ButtonShow = ({ mode }) => {
  
  return (
    <StyledMain  mode={mode}>
 
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Button placeholder="Default" mode={mode} />
        <Button placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Button placeholder="Valid Entry" valid={true} mode={mode} />
        <Button placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default ButtonShow;
