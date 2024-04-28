import React, { useState } from 'react';
import styled from 'styled-components';
import  Accordion  from './Accordion';
import Button from '../Button';

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledButton = styled(Button)`
  transition: transform 0.3s ease;
  &:active {
    transform: scale(0.95); // Scales down the button when clicked
  }
`;

const AccordionShow = () => {
  const [mode, setMode] = useState('dark');
  const [isOpen, setIsOpen] = useState({ a1: false, a2: true, a3: false, a4: false });

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  const handleAccordionClick = (key) => {
    setIsOpen(prevState => ({ ...prevState, [key]: !prevState[key] }));
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
        <StyledButton 
        text={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} 
        onClick={toggleMode} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Accordion title="Click to view (closed)" content="This is hidden content." mode={mode} isOpen={isOpen.a1} onClick={() => handleAccordionClick('a1')} />
        <Accordion title="Click to view (open)" content="This is visible content!" mode={mode} isOpen={isOpen.a2} onClick={() => handleAccordionClick('a2')} />
        <Accordion title="No content here" content="" mode={mode} isOpen={isOpen.a3} onClick={() => handleAccordionClick('a3')} />
        <Accordion title="Disabled (no toggle)" content="Disabled content not accessible." mode={mode} disabled={true} />
      </div>
    </StyledMain>
  );
};

export default AccordionShow;
