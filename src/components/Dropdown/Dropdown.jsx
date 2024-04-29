import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const DropdownContainer = styled.div`
  position: relative;
  user-select: none;
  width: 200px;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  background-color: ${props => props.disabled ? '#ccc' : (props.mode === 'dark' ? '#393939' : '#FFFFFF')};
  color: ${props => props.mode === 'dark' ? '#FFFFFF' : '#393939'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  position: relative;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  border: 1px solid #ccc;
  border-top: none;
  z-index: 10;
`;

const DropdownListItem = styled.div`
  padding: 10px;
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
    }
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
