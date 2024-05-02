import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';
import Button from '../Button'; 

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#F9F9F9F9'};
  // width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
`;

const TooltipShow = ({ mode }) => {



  return (
    <StyledMain mode={mode}>
  
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center', padding: '20px' }}>
        <Tooltip text="This is a top tooltip" position="top" mode={mode}>
          <Button mode={mode} >Hover for Top Tooltip</Button>
        </Tooltip>
        <Tooltip text="Check this bottom tooltip" position="bottom" mode={mode}>
          <Button mode={mode} >Hover for Bottom Tooltip</Button>
        </Tooltip>
        <Tooltip text="Tooltip on the right" position="right" mode={mode}>
          <Button mode={mode} >Hover for Right Tooltip</Button>
        </Tooltip>
      </div>
    </StyledMain>
  );
};

export default TooltipShow;
