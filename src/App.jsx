// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from './components/Button';
import ButtonShow from './components/Button/main';
import InputShow from './components/Input/main';
import AccordionShow from './components/Accordion/main';
import AlertsShow from './components/Alerts/main';
import BreadcrumbShow from './components/Breadcrumb/main';
import CardShow from './components/Card/main';
import CheckboxShow from './components/Checkbox/main';
import DateShow from './components/Date/main';
import DropdownShow from './components/Dropdown/main';
// import ListShow from './components/List/main';
// import LoadingShow from './components/Loading/main';
// import MenuShow from './components/Menu/main';
// import ModalShow from './components/Modal/main';
import ProgressShow from './components/Progress/main';
import RadioShow from './components/Radio/main';
import SliderShow from './components/Slider/main';
// import SnackbarShow from './components/Snackbar/main';
import TableShow from './components/Table/main';
// import TabsShow from './components/Tabs/main';
import ToggleShow from './components/Toggle/main';
import TooltipShow from './components/Tooltip/main';
import './App.css';

const ShowContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

const ButtonColumn = styled.div`
    position: absolute;
    top: 150px;
    left: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function App() {
  // State to control which component is visible
  const [visibleComponent, setVisibleComponent] = useState('');

  // Handler to toggle visibility based on the component
  const toggleVisibility = (componentName) => {
    setVisibleComponent(visibleComponent === componentName ? '' : componentName);
  };

  return (
    <div className="App">
      <ShowContainer>
        {visibleComponent === 'ButtonShow' && <ButtonShow />}
        {visibleComponent === 'InputShow' && <InputShow />}
        {visibleComponent === 'AccordionShow' && <AccordionShow />}
        {visibleComponent === 'AlertsShow' && <AlertsShow />}
        {visibleComponent === 'BreadcrumbShow' && <BreadcrumbShow />}
        {visibleComponent === 'CardShow' && <CardShow />}
        {visibleComponent === 'CheckboxShow' && <CheckboxShow />}
        {visibleComponent === 'DateShow' && <DateShow />}
        {visibleComponent === 'DropdownShow' && <DropdownShow />}
        {/* {visibleComponent === 'ListShow' && <ListShow />} */}
        {/* {visibleComponent === 'LoadingShow' && <LoadingShow />}
        {visibleComponent === 'MenuShow' && <MenuShow />}
        {visibleComponent === 'ModalShow' && <ModalShow />} */}
        {visibleComponent === 'ProgressShow' && <ProgressShow />}
        {visibleComponent === 'RadioShow' && <RadioShow />}
        {visibleComponent === 'SliderShow' && <SliderShow />}
        {/* {visibleComponent === 'SnackbarShow' && <SnackbarShow />} */}
        {visibleComponent === 'TableShow' && <TableShow />}
        {visibleComponent === 'TabsShow' && <TabsShow />}
        {visibleComponent === 'ToggleShow' && <ToggleShow />}
        {visibleComponent === 'TooltipShow' && <TooltipShow />}
      </ShowContainer>
      <ButtonColumn>
        <StyledButton onClick={() => toggleVisibility('ButtonShow')} text="Buttons"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('InputShow')} text="Inputs"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('AccordionShow')} text="Accordion"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('AlertsShow')} text="Alerts"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('BreadcrumbShow')} text="Breadcrumb"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('CardShow')} text="Cards"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('CheckboxShow')} text="Checkboxes"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('DateShow')} text="Dates"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('DropdownShow')} text="Dropdowns"></StyledButton>
        {/* <StyledButton onClick={() => toggleVisibility('ListShow')} text="Lists"></StyledButton> */}
        {/* <StyledButton onClick={() => toggleVisibility('LoadingShow')} text="Loading Indicators"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('MenuShow')} text="Menus"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('ModalShow')} text="Modals"></StyledButton> */}
        <StyledButton onClick={() => toggleVisibility('ProgressShow')} text="Progress Bars"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('RadioShow')} text="Radio Buttons"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('SliderShow')} text="Sliders"></StyledButton>
        {/* <StyledButton onClick={() => toggleVisibility('SnackbarShow')} text="Snackbars"></StyledButton> */}
        <StyledButton onClick={() => toggleVisibility('TableShow')} text="Tables"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('TabsShow')} text="Tabs"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('ToggleShow')} text="Toggles"></StyledButton>
        <StyledButton onClick={() => toggleVisibility('TooltipShow')} text="Tooltips"></StyledButton>
      </ButtonColumn>
    </div>
  );
}

export default App;
