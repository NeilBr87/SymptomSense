import React, { useState } from 'react';
import { TextField, Typography, Checkbox } from '@material-ui/core';
import TrackerDisplay from '../TrackerDisplay';

export default function TrackerForm(props) {
  const [symptomData, setSymptomData] = useState({
    symptomName: '',
    symptomDescription: '',
    symptomSeverity: '',
  });

  const [symptomClicked, setSymptomClicked] = useState("");

  function handleSymptomNameChange(event) {
    setSymptomData({ ...symptomData, symptomName: event.target.value });
  }

  function handleSymptomDescriptionChange(event) {
    setSymptomData({ ...symptomData, symptomDescription: event.target.value });
  }

  function handleSubmit() {
    props.addNewDay([...props.days, symptomData]);
    setSymptomData({
      symptomName: '',
      symptomDescription: '',
    });
  }

  return (
    <div style={{ border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column' }}>
      <Typography>Day {props.days.length + 1}</Typography>
      <TextField onChange={handleSymptomNameChange} value={symptomData.symptomName} id="outlined-basic" label="Symptom name" variant="outlined" />
      <TextField onChange={handleSymptomDescriptionChange} value={symptomData.symptomDescription} id="outlined-basic" label="Description" variant="outlined" />
            <button onClick={handleSubmit} style={{ width: '100px', height: '50px', backgroundColor: 'rgb(226, 80, 65)', color: 'white', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
    </div>
  );
}
