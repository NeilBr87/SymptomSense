import React, { useState } from 'react';
import { TextField, Typography, Checkbox } from '@material-ui/core';
import TrackerDisplay from '../TrackerDisplay';

export default function TrackerForm(props) {
  const [entry, setEntry] = useState({
    symptomName: '',
    symptomDescription: '',
    symptomOccurred: false,
    symptomSeverity: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [entries, setEntries] = useState([]);

  function handleSymptomNameChange(event) {
    setEntry({ ...entry, symptomName: event.target.value });
  }

  function handleSymptomDescriptionChange(event) {
    setEntry({ ...entry, symptomDescription: event.target.value });
  }

  function handleSymptomOccurredChange(event) {
    setEntry({ ...entry, symptomOccurred: event.target.checked });
  }

  function handleSubmit() {
    setSubmitted(true);
    setEntries([...entries, entry]);
    setEntry({
      symptomName: '',
      symptomDescription: '',
      symptomOccurred: false,
      symptomSeverity: '',
    });
  }

  return (
    <div>
      {!submitted && (
        <div style={{ border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column' }}>
          <Typography>Day {props.day}</Typography>
          <TextField onChange={handleSymptomNameChange} value={entry.symptomName} id="outlined-basic" label="Symptom name" variant="outlined" />
          <TextField onChange={handleSymptomDescriptionChange} value={entry.symptomDescription} id="outlined-basic" label="Description" variant="outlined" />
          <Typography>Occurred today?</Typography>
          <Checkbox onChange={handleSymptomOccurredChange} checked={entry.symptomOccurred} id="outlined-basic" label="Occurred" variant="outlined" />
          <button onClick={handleSubmit} style={{ width: '100px', height: '50px', backgroundColor: 'rgb(226, 80, 65)', color: 'white', border: 'none', borderRadius: '10px', marginTop: '10px' }}>Submit</button>
        </div>
      )}

      {submitted && (
        <div>
          <TrackerDisplay day={props.day} entries={entries} />
        </div>
      )}
    </div>
  );
}
