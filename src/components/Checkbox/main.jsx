import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import Button from '../Button';

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CheckboxShow = () => {
  const [mode, setMode] = useState('dark');
  const [checkedStates, setCheckedStates] = useState({
    default: false,
    invalid: false, // Assuming you might need to handle invalid separately
    valid: true, // This checkbox starts checked
    disabled: false // This checkbox is disabled
  });

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
          backgroundColor: mode === 'light' ? '#A09E9E' : '',
        }}      
      >
        <Button 
          text={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} 
          onClick={toggleMode} 
        />
      </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
      <Checkbox 
        label="Default"
        mode={mode}
        name="default"
        id="defaultCheckbox"
      />
      <Checkbox 
        label="Forbidden"
        mode={mode}
        name="forbidden"
        id="forbidden"
        forbidden={true}
      />
      <Checkbox 
        label="Disabled"
        mode={mode}
        name="disabled"
        id="disabled"
        disabled={true}
      />
      <Checkbox 
        label="Locked Check"
        mode={mode}
        name="lockedCheck"
        id="lockedCheck"
        lockedcheck={true}
      />
</div>
    </StyledMain>
  );
};

export default CheckboxShow;
