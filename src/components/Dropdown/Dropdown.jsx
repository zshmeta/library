import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  user-select: none;
  width: 180px; 
`;

const DropdownHeader = styled.div`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  font-size: 10px;
  padding: 1em;
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  text-transform: uppercase;
  transition: all 0.5s ease;
  box-shadow: ${props => `0 2px 5px ${props.mode === 'light' ? '#FF9900' : 'darkblue'}`};
  position: relative;

  &:hover {
    color: ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
    box-shadow: 0 1px 3px ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
  }
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  border: 1px solid #FF9900;
  border-top: 1px dashed darkblue;
  z-index: 10;
`;

const DropdownListItem = styled.div`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  font-size: 13px;
  padding: 10px;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'}; pi.1567@departement13.fr
  cursor: pointer;
  &:hover {
    background-color: ${props => props.mode === 'dark' ? '#505050' : '#f0f0f0'};
  }
`;
const Dropdown = ({ mode, disabled, alwaysOpen, title, items }) => {

  const [isOpen, setIsOpen] = useState(alwaysOpen || false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleDropdown = () => {
    if (!disabled && !alwaysOpen) {
      setIsOpen(!isOpen);
    }v
  };

  const handleItemClick = (id) => {
    if (!disabled) {
      setSelectedItems(prev => {
        const currentIndex = prev.indexOf(id);
        if (currentIndex > -1) {
          return prev.filter(item => item !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown} disabled={disabled} mode={mode}>
        {title}
      </DropdownHeader>
      {(isOpen || alwaysOpen) && (
        <DropdownListContainer mode={mode}>
          {items.map(item => (
            <DropdownListItem
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              mode={mode}
            >
              {item.title} {selectedItems.includes(item.id) && "✔"}
            </DropdownListItem>
          ))}
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
