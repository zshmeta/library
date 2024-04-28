// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from '../Button'

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ModalShow = () => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledMain key={mode} mode={mode}>
      <div
      style={{
          position: 'absolute', 
          top: '200px', 
          left: '200px',
          color: mode === 'light' ? '#FF9900' : '',
          backgroundColor: mode === 'light' ? '#A09E9E' : ''  ,
        }}      
        >
        <Button 
        text={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} 
        onClick={toggleMode} 
        />
      </div>
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
