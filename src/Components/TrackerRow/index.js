import React from 'react';
import { Box, Button } from '@material-ui/core';
import TrackerForm from '../TrackerForm';

export default function TrackerRow(props) {
    
    function handleNewSymptom() {
        props.setDay(props.day + 1);
        props.setSymptomClicked(true);
    }


    return (
        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4%'}}>
            {!props.symptomClicked &&
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
                }}>
                New Symptom
            </button>}   
            {props.symptomClicked &&
            <TrackerForm day={props.day} setDay={props.setDay}/>  }   
</Box>
    );
}