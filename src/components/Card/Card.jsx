import React from 'react';
import styled from 'styled-components';


const Cards = styled.div`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  font-size: 13px;
  width: 250px;
  height: 350px;
  border-radius: 20px;
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  box-shadow: ${props => props.active ? `0 0 0 2px ${props.mode === 'light' ? 'darkblue' : '#FF9900'} inset` : `0 2px 5px ${props.mode === 'light' ? '#FF9900' : 'darkblue'}`};
  display: flex;
  flex-direction: column;
  transition: .4s;
  position: relative;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  padding: 1em;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 1px 3px ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CardDescrWrapper = styled.div`
  padding: 15px;
  display: grid;
`;

const CardTitle = styled.h2`
  color: var(--font-color);
  text-align: center;
  margin-bottom: 15px;
  font-weight: 900;
  font-size: 16px;
`;

const CardDescr = styled.p`
  color: var(--font-color);
`;

const CardLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

const Link = styled.a`
  color: var(--font-color);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = ({ img, title, description, links, mode = 'dark', active }) => {
  return (
    <Cards mode={mode} active={active}>
      <CardImg img={img} />
      <CardDescrWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescr>{description}</CardDescr>
        <CardLinks>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>{link.text}</Link>
          ))}
        </CardLinks>
      </CardDescrWrapper>
    </Cards>
  );
}

export default Card;