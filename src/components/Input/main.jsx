// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from '../Button'

const StyledMain = styled.div`

`;

const InputShow = ({ mode }) => {

  return (
    <StyledMain  mode={mode}>
 
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Input placeholder="Default" mode={mode} />
        <Input placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Input placeholder="Valid Entry" valid={true} mode={mode} />
        <Input placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default InputShow;
