// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Button from '../Button'

const StyledMain = styled.div`

`;

const LoadingShow = ({ mode }) => {



  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Loading placeholder="Default" mode={mode} />
        <Loading placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Loading placeholder="Valid Entry" valid={true} mode={mode} />
        <Loading placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default LoadingShow;
