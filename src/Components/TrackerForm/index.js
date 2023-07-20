import React, { useState, useEffect, useRef } from 'react';
import { TextField, Typography } from '@material-ui/core';

export default function TrackerForm(props) {
  const [symptomData, setSymptomData] = useState({
    symptomName: '',
    symptomDescription: '',
    symptomSeverity: '',
  });

  const [date, setDate] = useState('');

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    props.setWorkingDate(newDate); // Update parent component immediately with the new date
  }
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
    <div style={{ border: '3px groove #4D7EA8', borderRadius: '15px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
      <Typography style={{ fontSize: '24px', fontWeight: 'bold', color: '#4D7EA8', textShadow: '1px 1px 0 black', marginBottom: '20px'}}>Day {props.days.length + 1}</Typography>
      {/* <Typography style={{ fontWeight: 'bold', marginBottom: '5px' }}>Date</Typography> */}
      {/* <input onChange={handleDateChange} type="date" id="startDate" name="startDate" style={{marginBottom: '20px'}}></input> */}
      
      {props.days.length === 0 ? ( 
        <TextField onChange={handleSymptomNameChange} value={symptomData.symptomName} id="outlined-basic" label="Symptom name" variant="outlined" />
      ) : (
        <Typography>{symptomData.symptomName}</Typography> 
      )}
      <TextField style={{marginTop: '20px', marginBottom: '30px'}} onChange={handleSymptomDescriptionChange} value={symptomData.symptomDescription} id="outlined-basic" label="Notes" variant="outlined" />
      <button onClick={handleSubmit} style={{ width: '100px', height: '50px', backgroundColor: 'rgb(226, 80, 65)', color: 'white', border: 'none', borderRadius: '10px', margin: '0 auto' }}>Submit</button>
    </div>
  );
}
