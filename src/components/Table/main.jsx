// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import Button from '../Button'

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TableShow = () => {
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
        <Table placeholder="Default" mode={mode} />
        <Table placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Table placeholder="Valid Entry" valid={true} mode={mode} />
        <Table placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default TableShow;
