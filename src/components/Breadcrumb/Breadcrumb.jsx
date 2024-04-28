import React from 'react';
import styled from 'styled-components';


export const BreadcrumbContainer = styled.nav`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
`;

export const BreadcrumbItem = styled.a`
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  margin: 0 8px;
  text-decoration: none;

  &:last-child {
    color: grey;
  }

  &:after {
    content: '/';
    margin: 0 5px;
  }

  &:last-child:after {
    content: '';
  }
`;

const Breadcrumb = ({ items, mode = 'dark' }) => (
  <BreadcrumbContainer aria-label="breadcrumb" mode={mode}>
    {items.map((item, index) => (
      <BreadcrumbItem href={item.href} mode={mode} key={index}>
        {item.text}
      </BreadcrumbItem>
    ))}
  </BreadcrumbContainer>
);

export default Breadcrumb;
