import React from 'react';
import { TextField, Typography, Checkbox } from '@material-ui/core';
export default function TrackerDisplay(props) {

    return (    
        <div style={{border: '1px solid black', padding: '15px', display: 'flex', flexDirection: 'column'}}>
            <Typography>Day: {props.day}</Typography>
            <Typography>Symptom: {props.symptomName} </Typography>
        </div>
    )

}