// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Date from './Date';
import Button from '../Button'

const StyledMain = styled.div`

`;

const DateShow = ({ mode }) => {



  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Date placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default DateShow;
