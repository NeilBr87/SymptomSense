import React, { useState } from 'react';
import { TextField, Typography, Checkbox } from '@material-ui/core';

export default function TrackerDisplay(props) {

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column' }}>
        <Typography>Day {props.day}</Typography>
        {props.entries.map((entry, index) => (
          <div key={index}>
            <Typography>Symptom Name: {entry.symptomName}</Typography>
            <Typography>Description: {entry.symptomDescription}</Typography>
            <Typography>Occurred today? {entry.symptomOccurred ? 'Yes' : 'No'}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
