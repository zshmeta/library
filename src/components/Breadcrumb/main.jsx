// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import Button from '../Button'

const StyledMain = styled.div`
  background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BreadcrumbShow = () => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  const breadcrumbItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' }
  ];

  const educationalBreadcrumbItems = [
  { href: '/course-home/module1', text: 'Module 1: Introduction' },
  { href: '#home/module1/lesson', text: '' },
  { href: '#', text: 'Quiz' }
];

<Breadcrumb items={educationalBreadcrumbItems} mode="dark" />


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
        <Breadcrumb items={breadcrumbItems} mode={mode} />
        <Breadcrumb items={educationalBreadcrumbItems} mode="dark" />
      </div>
    </StyledMain>
  );
};

export default BreadcrumbShow;
