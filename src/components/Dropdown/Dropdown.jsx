import React, { useState } from 'react';
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  color: #FF9900;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const Dropdown = ({ title, items, mode = 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)} mode={mode}>
        {title}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {items.map(item => <a href={item.link}>{item.label}</a>)}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
