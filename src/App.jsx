// eslint-disable-next-line
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
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
// import ProgressShow from './components/Progress/main';
import RadioShow from './components/Radio/main';
// import SliderShow from './components/Slider/main';
// import SnackbarShow from './components/Snackbar/main';
// import TableShow from './components/Table/main';
// import TabsShow from './components/Tabs/main';
import ToggleShow from './components/Toggle/main';
import TooltipShow from './components/Tooltip/main';
import './App.css';


function App() {
  // State to control which component is visible
  const [visibleComponent, setVisibleComponent] = useState('');
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };
  // Handler to toggle visibility based on the component
  const toggleVisibility = (componentName) => {
    setVisibleComponent(visibleComponent === componentName ? '' : componentName);
  };

  return (
    <div className="App" 
    style=
    {{ 
      backgroundColor: mode === 'dark' ? '#393939' : '#F9F9F9' 
    }}>
      <div
        style={{
          position: 'absolute',
          top: '130px',
          left: '130px',
        }}
      >
        <Button 
        text={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} 
        onClick={toggleMode} 
        mode={mode} />
      </div>
      
      <div mode={mode} className="ShowContainer">
        
        {visibleComponent === 'ButtonShow' && <ButtonShow mode={mode} />}
        {visibleComponent === 'InputShow' && <InputShow mode={mode} />}
        {/* {visibleComponent === 'AccordionShow' && <AccordionShow mode={mode} />} */}
        {visibleComponent === 'AlertsShow' && <AlertsShow mode={mode} />}
        {visibleComponent === 'BreadcrumbShow' && <BreadcrumbShow mode={mode} />}
        {visibleComponent === 'CardShow' && <CardShow mode={mode} />}
        {visibleComponent === 'CheckboxShow' && <CheckboxShow mode={mode} />}
        {visibleComponent === 'DateShow' && <DateShow mode={mode} />}
        {visibleComponent === 'DropdownShow' && <DropdownShow mode={mode} />}
        {/* {visibleComponent === 'ListShow' && <ListShow mode={mode} />} */}
        {/* {visibleComponent === 'LoadingShow' && <LoadingShow mode={mode} />}
        {visibleComponent === 'MenuShow' && <MenuShow mode={mode} />}
        {visibleComponent === 'ModalShow' && <ModalShow mode={mode} />} */}
        {/* {visibleComponent === 'ProgressShow' && <ProgressShow mode={mode} />} */}
        {visibleComponent === 'RadioShow' && <RadioShow mode={mode} />}
        {/* {visibleComponent === 'SliderShow' && <SliderShow mode={mode} />} */}
        {/* {visibleComponent === 'SnackbarShow' && <SnackbarShow mode={mode} />} */}
        {/* {visibleComponent === 'TableShow' && <TableShow mode={mode} />} */}
        {/* {visibleComponent === 'TabsShow' && <TabsShow mode={mode} />} */}
        {visibleComponent === 'ToggleShow' && <ToggleShow mode={mode} />}
        {visibleComponent === 'TooltipShow' && <TooltipShow mode={mode} />}
      </div>

      <div mode={mode} className="ButtonColumn">
        <Button mode={mode}  onClick={() => toggleVisibility('ButtonShow')} text="Buttons"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('InputShow')} text="Inputs"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('AccordionShow')} text="Accordion"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('AlertsShow')} text="Alerts"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('BreadcrumbShow')} text="Breadcrumb"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('CardShow')} text="Cards"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('CheckboxShow')} text="Checkboxes"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('DateShow')} text="Dates"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('DropdownShow')} text="Dropdowns"></Button>
        {/* <Button mode={mode} onClick={() => toggleVisibility('ListShow')} text="Lists"></Button> */}
        {/* <Button mode={mode} onClick={() => toggleVisibility('LoadingShow')} text="Loading Indicators"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('MenuShow')} text="Menus"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('ModalShow')} text="Modals"></Button> */}
        {/* <Button mode={mode} onClick={() => toggleVisibility('ProgressShow')} text="Progress Bars"></Button> */}
        <Button mode={mode} onClick={() => toggleVisibility('RadioShow')} text="Radio Buttons"></Button>
        {/* <Button mode={mode} onClick={() => toggleVisibility('SliderShow')} text="Sliders"></Button> */}
        {/* <Button mode={mode} onClick={() => toggleVisibility('SnackbarShow')} text="Snackbars"></Button> */}
        {/* <Button mode={mode} onClick={() => toggleVisibility('TableShow')} text="Tables"></Button> */}
        {/* <Button mode={mode} onClick={() => toggleVisibility('TabsShow')} text="Tabs"></Button> */}
        <Button mode={mode} onClick={() => toggleVisibility('ToggleShow')} text="Toggles"></Button>
        <Button mode={mode} onClick={() => toggleVisibility('TooltipShow')} text="Tooltips"></Button>
      </div>
      
    </div>
    
  );
}

export default App;
