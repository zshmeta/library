// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from '../Button'

const StyledMain = styled.div`

`;

const ModalShow = ({ mode }) => {



  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Modal placeholder="Default" mode={mode} />
        <Modal placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Modal placeholder="Valid Entry" valid={true} mode={mode} />
        <Modal placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default ModalShow;
