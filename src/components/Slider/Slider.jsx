import React from 'react';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%; // Adjust the width as needed
`;

export const SliderLabel = styled.label`
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  margin-right: 10px; // Spacing between label and slider
`;

export const StyledSlider = styled.input.attrs({ type: 'range' })`
  width: 100%; // Takes the full width of its container
  cursor: pointer;
  accent-color: ${props => props.mode === 'light' ? '#FF9900' : 'darkblue'}; // Slider thumb and track color
`;


const Slider = ({ label, value, onChange, min = 0, max = 100, step = 1, mode = 'dark' }) => {
  return (
    <SliderContainer>
      {label && <SliderLabel mode={mode}>{label}</SliderLabel>}
      <StyledSlider
        mode={mode}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </SliderContainer>
  );
};

export default Slider;
