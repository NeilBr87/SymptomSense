import React from 'react';
import { useState } from 'react';
import TrackerRow from '../TrackerRow';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Menu() {
    const [day, setDay] = useState(0);
    const [symptomClicked, setSymptomClicked] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <div style={{marginTop: isMobile? '-1%' : '5%'}}>
            <p><span style={{color: 'rgb(226, 80, 65)', fontSize: isMobile? '40px' : '50px'}}>Symptom</span><span style={{color: 'white', backgroundColor: 'rgb(226, 80, 65)', fontSize: isMobile? '45px' : '55px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>Sense</span></p>        
            <TrackerRow day={day} setDay={setDay} symptomClicked={symptomClicked} setSymptomClicked={setSymptomClicked} />
        </div>
    );
}