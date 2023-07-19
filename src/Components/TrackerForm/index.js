import React, { useState, useEffect } from 'react';
import { TextField, Typography } from '@material-ui/core';

export default function TrackerForm(props) {
  const [symptomData, setSymptomData] = useState({
    symptomName: '',
    symptomDescription: '',
    symptomSeverity: '',
  });

  useEffect(() => {
    const storedName = localStorage.getItem('symptomName');
    if (storedName) {
      setSymptomData({ ...symptomData, symptomName: storedName });
    }
  }, []);

  function handleSymptomNameChange(event) {
    setSymptomData({ ...symptomData, symptomName: event.target.value });
  }

  function handleSymptomDescriptionChange(event) {
    setSymptomData({ ...symptomData, symptomDescription: event.target.value });
  }

  function handleSubmit() {
    props.addNewDay([...props.days, symptomData]);
    localStorage.setItem('symptomName', symptomData.symptomName);
    setSymptomData({
      ...symptomData,
      symptomDescription: '',
    });
  }

  return (
    <div style={{ border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column' }}>
      <Typography>Day {props.days.length + 1}</Typography>
      {props.days.length === 0 ? ( 
        <TextField onChange={handleSymptomNameChange} value={symptomData.symptomName} id="outlined-basic" label="Symptom name" variant="outlined" />
      ) : (
        <Typography>{symptomData.symptomName}</Typography> 
      )}
      <TextField onChange={handleSymptomDescriptionChange} value={symptomData.symptomDescription} id="outlined-basic" label="Description" variant="outlined" />
      <button onClick={handleSubmit} style={{ width: '100px', height: '50px', backgroundColor: 'rgb(226, 80, 65)', color: 'white', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
    </div>
  );
}
