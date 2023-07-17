import React from 'react';
import { useState } from 'react';
import { Box} from '@material-ui/core';
import TrackerRow from '../TrackerRow';

export default function Menu() {
    const [day, setDay] = useState(0);
    const [symptomClicked, setSymptomClicked] = useState(false);

    return (
        <Box style={{marginTop: '5%'}}>
            <p><span style={{color: 'rgb(226, 80, 65)', fontSize: '50px'}}>Symptom</span><span style={{color: 'white', backgroundColor: 'rgb(226, 80, 65)', fontSize: '55px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>Sense</span></p>        
            <TrackerRow day={day} setDay={setDay} symptomClicked={symptomClicked} setSymptomClicked={setSymptomClicked} />
        </Box>
    );
}