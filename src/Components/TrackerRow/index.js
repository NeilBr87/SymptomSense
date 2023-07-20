import React, { useState } from 'react';
import TrackerForm from '../TrackerForm';
import TrackerDisplay from '../TrackerDisplay';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function TrackerRow(props) {
  const [symptomClicked, setSymptomClicked] = useState(false);
  const [days, setDays] = useState([]);
  const [workingDate, setWorkingDate] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function handleNewSymptom() {
    setSymptomClicked(true);
  }

  function addNewDay(newDayData) {
    setDays([...days, newDayData]);
    setSymptomClicked(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4%' }}>
      {!symptomClicked && (
        <button
          onClick={handleNewSymptom}
          style={{
            width: isMobile? '110px' : '120px',
            height: isMobile? '100px' : '110px',
            fontSize: '20px',
            backgroundColor: '#4D7EA8',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            border: 'none',
            alignItems: 'center',
            color: 'white'
          }}
        >
          New day
        </button>
      )}
      {symptomClicked && <TrackerForm days={days} addNewDay={addNewDay} setWorkingDate={setWorkingDate} workingDate={workingDate}/>}
      {days.map((dayData, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <TrackerDisplay day={index + 1} entries={dayData} workingDate={workingDate}/>
        </div>
      ))}
    </div>
  );
}
