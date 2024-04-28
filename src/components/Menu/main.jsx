// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Button from '../Button'

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MenuShow = () => {
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
        <Menu placeholder="Default" mode={mode} />
        <Menu placeholder="Invalid Entry" invalid={true} mode={mode} />
        <Menu placeholder="Valid Entry" valid={true} mode={mode} />
        <Menu placeholder="Disabled" disabled={true} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default MenuShow;
