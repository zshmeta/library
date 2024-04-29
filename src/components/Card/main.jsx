import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';  // Make sure this path is correct
import Button from '../Button';  // Adjust path as necessary

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardShow = () => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  // Mock data for cards
  const cardsData = [
    {
      img: "Placeholder Image",
      title: "Default Card",
      description: "This is a default card description.",
      links: [{ href: "#", text: "Link 1" }],
      active: false
    },
    {
      img: "Placeholder Image",
      title: "Active Card",
      description: "This is an active card description.",
      links: [{ href: "#", text: "Link 2" }],
      active: true
    },

  ];

  return (
    <StyledMain key={mode} mode={mode}>
      <Button 
        text={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} 
        onClick={toggleMode} 
        style={{ position: 'absolute', top: '130px', left: '130px', color: mode === 'light' ? '#FF9900' : '', backgroundColor: mode === 'light' ? '#A09E9E' : '' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            links={card.links}
            mode={mode}
            active={card.active}
          />
        ))}
      </div>
    </StyledMain>
  );
};

export default CardShow;
