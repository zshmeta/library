import React from 'react';
import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  width: ${props => props.completed}%;
  background-color: ${props => props.mode === 'light' ? '#FF9900' : '#393939'};
  transition: width 0.6s ease;
`;


const ProgressBar = ({ completed, mode = 'dark' }) => (
  <ProgressBarContainer>
    <ProgressBarFiller completed={completed} mode={mode} />
  </ProgressBarContainer>
);

export default ProgressBar;
