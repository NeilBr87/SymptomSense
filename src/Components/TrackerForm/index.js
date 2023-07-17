import React from 'react';
import { useState } from 'react';
import { TextField, Typography, Checkbox } from '@material-ui/core';
import TrackerDisplay from '../TrackerDisplay';

export default function TrackerForm(props) {

    const [symptomName, setSymptomName] = useState('');
    const [symptomDescription, setSymptomDescription] = useState('');
    const [symptomOccurred, setSymptomOccurred] = useState(false);
    const [symptomSeverity, setSymptomSeverity] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSymptomNameChange(event) {
        setSymptomName(event.target.value);
    }

    function handleSymptomDescriptionChange(event) {
        setSymptomDescription(event.target.value);
    }

    function handleSymptomOccurredChange(event) {
        setSymptomOccurred(event.target.value);
    }

    //Now the submit
    function handleSubmit() {
        setSubmitted(true);
        console.log('submitted');   
    }

    return (
        <div>
            {!submitted &&
                <div style={{border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column'}}>
                    <Typography>Day {props.day}</Typography>
                    <TextField onChange={handleSymptomNameChange} id="outlined-basic" label="Symptom name" variant="outlined" />
                    <TextField onChange={handleSymptomDescriptionChange} id="outlined-basic" label="Description" variant="outlined" />
                    <Typography>Occurred today?</Typography>
                    <Checkbox onChange={handleSymptomOccurredChange} id="outlined-basic" label="Occurred" variant="outlined" />
                    <button onClick={handleSubmit} style={{width: '100px', height: '50px', backgroundColor: 'rgb(226, 80, 65)', color: 'white', border: 'none', borderRadius: '10px', marginTop: '10px'}}>Submit</button>
                </div>}
            

            {submitted && 
                <div>
                    <TrackerDisplay day={props.day} symptomName={symptomName} />
                </div> }

        </div>
    );
}