import React from 'react';
import { useState, useEffect } from 'react';
import Auth from '../Auth';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import phoneScreen from './phoneScreen.png';

export default function LandingPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginTexts, setLoginTexts] = useState("Login / Signup");

    useEffect(() => {
        if (loggedIn) {
            setLoginTexts("Logout")
        }
        else {
            setLoginTexts("Login / Signup")
        }
    }, [loggedIn])

    function handleLogin() {
        setLoggedIn(!loggedIn)
        
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <button style={{marginLeft: 'auto', padding: '10px', marginTop: isMobile? '10px' : '30px', marginRight: isMobile? '10px' : '30px', width: isMobile? '120px' : '170px', height: isMobile? '40px' : '60px', fontSize: isMobile? '14px' : '22px', borderRadius: '30px', backgroundColor: '#4D7EA8', color: 'white'}} onClick={handleLogin}>{loginTexts}</button>
            {!loggedIn && 
            <div style={{marginTop: '-2%'}}>
                <p><span style={{color: 'rgb(226, 80, 65)', fontSize: isMobile? '45px' : '70px'}}>Symptom</span><span style={{color: 'white', backgroundColor: 'rgb(226, 80, 65)', fontSize: isMobile? '55px' : '90px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>Sense</span></p>        
                <h2 style={{marginTop: '3%', fontSize: isMobile? '18px' : '25px', margin: '0 auto', width: isMobile? '340px' : '1200px'}}>A tracker app for you to monitor new symptoms and present accurate occurrence data to your GP.</h2>
                
                <div style={{display: 'flex', flexDirection: isMobile? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: isMobile? '0%' : '5%'}}>
                    <div>
                        <h3 style={{marginTop: isMobile? '10%' : '3%', fontSize: isMobile? '14px' : '25px', textAlign: isMobile? 'center' : 'left'}}>What is SymptomSense?</h3>
                        <p style={{fontSize: isMobile? '14px' : '18px', textAlign: isMobile? 'center' : 'left'}}>We've all had those nagging feelings before: </p>
                        <p style={{fontSize: isMobile? '12px' : '18px',  fontStyle: 'italic', width: isMobile? '340px' : '660px', textAlign: isMobile? 'center' : 'justify'}}>"I was ill ages ago but the cough is still here."</p>
                        <p style={{fontSize: isMobile? '12px' : '18px',  fontStyle: 'italic', width: isMobile? '340px' : '660px', textAlign: isMobile? 'center' : 'justify'}}>"That lower back pain really should have gone down by now."</p>
                        <p style={{fontSize: isMobile? '12px' : '18px',  fontStyle: 'italic', width: isMobile? '340px' : '660px', textAlign: isMobile? 'center' : 'justify'}}>"I can't remember the last time I didn't wake up with a headache."</p>
                        <p style={{fontSize: isMobile? '12px' : '18px',  width: isMobile? '330px' : '660px', margin: '0 auto', textAlign: isMobile? 'center' : 'justify'}}>With SymptomSense, you can begin tracking a symptom you're worried about. Each day you'll make a new note about it, where you can note down whether you experienced it, for how long, the severity, or anything you think is relevant.</p>
                        <p style={{fontSize: isMobile? '12px' : '18px', width: isMobile? '330px' : '660px', margin: '0 auto', marginTop: '3%', textAlign: isMobile? 'center' : 'justify'}}>If something does persist, and you speak to your GP about them, you'll be able to show them detailed data in your own words about your symptom and give them as clear a picture as possible.</p>
                        <p style={{fontSize: isMobile? '12px' : '18px', width: isMobile? '330px' : '660px', marginTop: '3%', textAlign: isMobile? 'center' : 'justify'}}>SymptomSense is a free app built by Neil Brooks, an independent developer. It is not assocated with the NHS or any medical body.</p>
                    </div>

                    <div>
                        <img src={phoneScreen} alt="phone preview" style={{width: isMobile? '200px' : '300px', height: isMobile? '400px' : '550px', marginTop: isMobile? '10px' : '30px'}}/>
                    </div>

                </div>
                <div style={{width: isMobile ? '240px' : '1200px', marginTop: isMobile? '3%' : '3.5%', margin: '0 auto', backgroundColor: '#F2AF29', padding: '5px', borderRadius: '20px', marginBottom: '20px'}}>
                <h3 style={{fontSize: isMobile? '12px' : '18px'}}>Important disclaimer</h3>
                    <p style={{fontSize: isMobile? '10px' : '16px'}}>SymptomSense is not a diagnostic tool, and it cannot give any medical advice. As the creator of the app I bear no responsibility for medical insights gained by the patient.</p>
                    <p style={{fontSize: isMobile? '10px' : '16px'}}>This app is NOT designed to hold identifiable personal data. I recommend that you signup to the app using a temporary email address that cannot be traced back to you. Any deviation from this recommendation will be entirely at the user's risk.</p>
                </div>
            </div>}


            {loggedIn && <Auth />}

        </div>
    )
}