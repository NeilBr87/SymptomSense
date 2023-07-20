import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

// function formatDateToDDMMYYYY(dateString) {
//   const [year, month, day] = dateString.split('-');
//   return `${day}/${month}/${year}`;
// }

export default function TrackerDisplay(props) {
  const [labelName, setLabelName] = useState('');
  const [labelDescription, setLabelDescription] = useState('');

  useEffect(() => {
    let hasData = false;
    for (const entry of props.entries) {
      if (entry.symptomName !== '' || entry.symptomDescription !== '') {
        hasData = true;
        break;
      }
    }

    if (!hasData) {
      setLabelName('');
      setLabelDescription('');
    } else {
      setLabelName('Symptom name');
      setLabelDescription('Notes');
    }
  }, [props.entries]);

  return (
    <div>
      <div style={{ border: '3px groove #4D7EA8', borderRadius: '15px', padding: '25px', width: '200px', display: 'flex', flexDirection: 'column' }}>
        <Typography style={{ fontSize: '24px', fontWeight: 'bold', color: '#4D7EA8', textShadow: '1px 1px 0 black'}}>Day {props.day}</Typography>
        {/* <Typography>Date: {formatDateToDDMMYYYY(props.workingDate)}</Typography> */}
        {labelName && (
          <Typography style={{ marginTop: '15px', fontWeight: 'bold' }}>{labelName}</Typography>
        )}
        <div>
          {props.entries.map((entry, index) => (
            entry.symptomName && (
              <Typography
                key={index}
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginTop: '5px',
                  width: '180px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  margin: '0 auto'
                }}
              >
                {entry.symptomName}
              </Typography>
            )
          ))}
        </div>
        {labelDescription && (
          <Typography style={{ marginTop: '15px', fontWeight: 'bold' }}>{labelDescription}</Typography>
        )}
        <div>
          {props.entries.map((entry, index) => (
            entry.symptomDescription && (
              <Typography
                key={index}
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  borderRadius: '20px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginTop: '5px',
                  width: '180px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  margin: '0 auto'
                }}
              >
                {entry.symptomDescription}
              </Typography>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
