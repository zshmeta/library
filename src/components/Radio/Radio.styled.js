
import styled from 'styled-components';

export const StyledRadioContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: 'comic-sans', sans-serif;
  font-weight: 1000;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  text-transform: uppercase;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledRadio = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.checked ? (props.mode === 'light' ? 'darkblue' : '#FF9900') : (props.mode === 'light' ? '#A09E9E' : 'transparent')};
  border: 2px solid ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
  transition: all 0.5s ease;
`;