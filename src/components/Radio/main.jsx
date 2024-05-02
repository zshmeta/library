// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Radio from './Radio';
import Button from '../Button'

const StyledMain = styled.div`

`;

const RadioShow = ({ mode }) => {



  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Radio placeholder="Default" mode={mode} />
        <Radio placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Radio placeholder="Valid Entry" valid={true} mode={mode} />
        <Radio placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default RadioShow;
