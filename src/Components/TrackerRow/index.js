import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import TrackerForm from '../TrackerForm';
import TrackerDisplay from '../TrackerDisplay';

export default function TrackerRow(props) {
  const [symptomClicked, setSymptomClicked] = useState(false);
  const [days, setDays] = useState([]);

  function handleNewSymptom() {
    setSymptomClicked(true);
  }

  function addNewDay(newDayData) {
    setDays([...days, newDayData]);
    setSymptomClicked(false);
  }

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4%' }}>
      {!symptomClicked && (
        <button
          onClick={handleNewSymptom}
          style={{
            width: '120px',
            height: '110px',
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
          Add new day
        </button>
      )}
      {symptomClicked && <TrackerForm days={days} addNewDay={addNewDay}/>}
      {days.map((dayData, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <TrackerDisplay day={index + 1} entries={dayData}/>
        </div>
      ))}
    </Box>
  );
}
