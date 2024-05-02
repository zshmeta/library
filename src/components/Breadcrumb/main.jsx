// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import Button from '../Button'

const StyledMain = styled.div`

`;

const BreadcrumbShow = ({ mode }) => {



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
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
        <Breadcrumb items={breadcrumbItems} mode={mode} />
        <Breadcrumb items={educationalBreadcrumbItems} mode={mode} />
      </div>
    </StyledMain>
  );
};

export default BreadcrumbShow;
