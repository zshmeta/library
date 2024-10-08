import React, { useState } from 'react';
import styled from 'styled-components';
import Alerts from './Alerts';  
import Button from '../Button';

const StyledMain = styled.div`
  // background-color: ${props => props.mode === 'dark' ? '#393939' : '#FFFFFF'};
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

const AlertButton = styled(Button)`
  margin: 10px;
  padding: 10px;
  gap: 10px;
`;

const AlertsShow = ({ mode }) => {
  const [alertState, setAlertState] = useState({
    error: false,
    success: false,
    warning: false,
    info: false
  });

  // We also keep track of dynamic alerts
  const [dynamicAlerts, setDynamicAlerts] = useState([]);



  const triggerAlert = (type) => {
    setAlertState(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setAlertState(prev => ({ ...prev, [type]: false }));
    }, 1000);
  };

  const triggerDynamicAlert = (type, position) => {
    const key = `${type}-${position}-${Date.now()}`;
    const alert = {
      key,
      type,
      position,
      message: `Dynamic ${type} alert from the ${position}!`
    };

    setDynamicAlerts(prev => [...prev, alert]);

    // Remove alert after a delay
    setTimeout(() => {
      setDynamicAlerts(prev => prev.filter(a => a.key !== key));
    }, 3000);
  };

  return (
    <StyledMain  mode={mode}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', paddingBottom: '40px',  gap: '20px' }}>
        {['error', 'success', 'warning', 'info'].map((type) => (
          <div key={type}>
            <Alerts type={type} show={alertState[type]} animate={alertState[type]}>
              {`${type.charAt(0).toUpperCase() + type.slice(1)}: Static alert!`}
            </Alerts>
            <AlertButton onClick={() => triggerDynamicAlert(type, 'top')} text={` Up`}></AlertButton>
            <AlertButton onClick={() => triggerDynamicAlert(type, 'bottom')} text={` Down`}></AlertButton>

            {dynamicAlerts.filter(alert => alert.type === type).map(alert => (
              <Alerts
                key={alert.key}
                type={alert.type}
                show={true}
                animatetop={alert.position === 'top'}
                animatebottom={alert.position === 'bottom'}
                children={alert.message}
              />
            ))}
          </div>
        ))}
      </div>
    </StyledMain>
  );
};

export default AlertsShow;
