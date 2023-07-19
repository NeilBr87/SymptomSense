import React, { useState, useEffect } from 'react';
import { TextField, Typography, Checkbox } from '@material-ui/core';

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
      <div style={{ border: '1px solid black', padding: '25px', width: '200px', display: 'flex', flexDirection: 'column' }}>
        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>Day {props.day}</Typography>
        {labelName && <Typography style={{ marginTop: '15px' }}>{labelName}</Typography>}
        {props.entries.map((entry, index) => (
          <div key={index}>
            {labelName && (
              <Typography
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginTop: '5px',
                }}
              >
                {entry.symptomName}
              </Typography>
            )}
          </div>
        ))}
        {labelDescription && <Typography style={{ marginTop: '15px' }}>{labelDescription}</Typography>}
        {props.entries.map((entry, index) => (
          <div key={index}>
            {labelDescription && (
              <Typography
                style={{
                  backgroundColor: 'rgb(240, 240, 240)',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginTop: '5px',
                }}
              >
                {entry.symptomDescription}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
