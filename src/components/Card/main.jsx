import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';  // Make sure this path is correct
import Button from '../Button';  // Adjust path as necessary
import Obeyda from './Obeyda.png';
import WeshLogo from './wesh-logo.png';


const StyledMain = styled.div`

`;

const CardShow = ({ mode }) => {



  // Mock data for cards
  const cardsData = [
    {
      img: Obeyda,
      title: "Default Card",
      description: "This is a default card description.",
      links: [{ href: "#", text: "Link 1" }],
      active: false
    },
    {
      img: WeshLogo,
      title: "Active Card",
      description: "This is an active card description.",
      links: [{ href: "#", text: "Link 2" }],
      active: true
    },

  ];

  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'raw', alignItems: 'center', padding: '20px', gap: '13px' }}>
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
