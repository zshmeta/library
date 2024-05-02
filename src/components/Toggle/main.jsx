// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Button from '../Button'

const StyledMain = styled.div`

`;

const ToggleShow = ({ mode }) => {



  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Toggle placeholder="Default" mode={mode} />
        <Toggle placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Toggle placeholder="Valid Entry" valid={true} mode={mode} />
        <Toggle placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default ToggleShow;
