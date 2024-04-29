import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center; // Ensures input fields are centered
`;

const DateInput = styled.input`
  font-family: 'Arial', sans-serif; // Using Arial for a clean appearance
  font-weight: bold;
  font-size: 16px;
  background: transparent;
  color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 50px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 3px ${props => props.mode === 'light' ? 'darkblue' : '#FF9900'};
  }

  &::placeholder {
    color: ${props => props.mode === 'light' ? '#FF9900' : '#ffedd3'};
  }
`;

const Separator = styled.span`
  font-size: 16px;
  color: #FF9900;
  padding: 0 5px;
`;

const DisplayDate = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: ${props => props.mode === 'light' ? 'black' : 'white'};
  text-align: center; // Centers the displayed date
`;

const DisplayAge = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: ${props => props.mode === 'light' ? 'darkblue' : '#ffedd3'};
  text-align: center; // Centers the displayed age
`;

const DatePicker = ({ mode }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [displayDate, setDisplayDate] = useState('');
  const [age, setAge] = useState('');

  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const formattedDay = day ? getDayWithSuffix(day) : '';
    const formattedMonth = month ? months[month - 1] : '';
    const formattedYear = year || '';

    let parts = [];
    if (formattedDay) parts.push(formattedDay);
    if (formattedMonth) parts.push(`of ${formattedMonth}`);
    if (formattedYear) parts.push(`, ${formattedYear}`);

    setDisplayDate(parts.join(' '));

    if (day && month && year) {
      calculateAge(new Date(year, month - 1, day));
    } else {
      setAge(''); // Clear age when inputs are not complete
    }
  }, [day, month, year]);

  const calculateAge = (birthdate) => {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    setAge(age);
  };

  const getDayWithSuffix = (day) => {
    if (!day) return '';
    const j = day % 10, k = day % 100;
    if (j === 1 && k !== 11) {
      return day + "st";
    }
    if (j === 2 && k !== 12) {
      return day + "nd";
    }
    if (j === 3 && k !== 13) {
      return day + "rd";
    }
    return day + "th";
  };

  return (
    <div style={{ padding: '20px' }}>
      <DateInputContainer>
        <DateInput type="text" placeholder="DD" value={day} onChange={(e) => setDay(e.target.value)} maxLength="2" mode={mode} />
        <Separator>/</Separator>
        <DateInput type="text" placeholder="MM" value={month} onChange={(e) => setMonth(e.target.value)} maxLength="2" mode={mode} />
        <Separator>/</Separator>
        <DateInput type="text" placeholder="YYYY" value={year} onChange={(e) => setYear(e.target.value)} maxLength="4" mode={mode} />
      </DateInputContainer>
      <DisplayDate mode={mode}>{displayDate}</DisplayDate>
      {day && month && year && age ? <DisplayAge mode={mode}>Age: {age} years</DisplayAge> : null}
    </div>
  );
};

export default DatePicker;
