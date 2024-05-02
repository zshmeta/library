import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import Button from '../Button';

const StyledMain = styled.div`

`;

const CheckboxShow = ({ mode }) => {
  const [checkedStates, setCheckedStates] = useState({
    default: false,
    invalid: false, // Assuming you might need to handle invalid separately
    valid: true, // This checkbox starts checked
    disabled: false // This checkbox is disabled
  });




  return (
    <StyledMain  mode={mode}>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px' }}>
      <Checkbox 
        label="Default"
        mode={mode}
        name="default"
        id="defaultCheckbox"
      />
      <Checkbox 
        label="Forbidden"
        mode={mode}
        name="forbidden"
        id="forbidden"
        forbidden={true}
      />
      <Checkbox 
        label="Disabled"
        mode={mode}
        name="disabled"
        id="disabled"
        disabled={true}
      />
      <Checkbox 
        label="Locked Check"
        mode={mode}
        name="lockedCheck"
        id="lockedCheck"
        lockedcheck={true}
      />
</div>
    </StyledMain>
  );
};

export default CheckboxShow;
