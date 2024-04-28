import React, { useState } from 'react';
import styled from 'styled-components';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionTitle = styled.button`
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  color: #FF9900;
  cursor: pointer;
  padding: 18px;
  text-align: left;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;




const Accordion = ({ title, content, mode = 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionSection>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)} mode={mode}>
        {title}
      </AccordionTitle>
      {isOpen && <AccordionContent>
        {content}
      </AccordionContent>}
    </AccordionSection>
  );
};

export default Accordion;
