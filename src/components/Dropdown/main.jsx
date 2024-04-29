import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Button from '../Button';

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DropdownShow = () => {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');

  const items = [
    { id: 0, title: 'Option 1' },
    { id: 1, title: 'Option 2' },
    { id: 2, title: 'Option 3' },
  ];

  return (
    <StyledMain key={mode} mode={mode}>
      <Button text={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} onClick={toggleMode} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Dropdown mode={mode} title="Default Dropdown" items={items} />
        <Dropdown mode={mode} disabled={true} title="Disabled Dropdown" items={items} />
        <Dropdown mode={mode} alwaysOpen={true} title="Multi-Choice Dropdown" items={items} />
      </div>
    </StyledMain>
  );
};

export default DropdownShow;
