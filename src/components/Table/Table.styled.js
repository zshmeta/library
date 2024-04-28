import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${props => props.mode === 'light' ? 'white' : '#393939'};
  color: ${props => props.mode === 'light' ? '#333' : '#FFF'};
`;

export const StyledTh = styled.th`
  background: ${props => props.mode === 'light' ? '#A09E9E' : 'transparent'};
  color: #FF9900;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;