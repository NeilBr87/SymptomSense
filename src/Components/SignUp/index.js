import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Menu from "../Menu";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const auth = getAuth();

    function handleEmailChange(e) {
        setInputEmail(e.target.value);
    }

    function handleLoginEmailChange(e) {
        setLoginEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setInputPassword(e.target.value);
    }

    function handleLoginPasswordChange(e) {
        setLoginPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Use the input states for email and password
        setEmail(inputEmail);
        setPassword(inputPassword);

        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                setSuccessMessage(true);
                setInputEmail("");
                setInputPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        setEmail(loginEmail);
        setPassword(loginPassword);

        signInWithEmailAndPassword(auth, loginEmail, loginPassword) // Use the separate login email and password states
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setSuccessMessage(true);
                setLoginEmail("");
                setLoginPassword("");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (   
        <div>
            {!successMessage && 
            <div>
            <p><span style={{color: 'rgb(226, 80, 65)', fontSize: isMobile? '40px' : '50px'}}>Symptom</span><span style={{color: 'white', backgroundColor: 'rgb(226, 80, 65)', fontSize: isMobile? '45px' : '55px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>Sense</span></p>        

                <div style={{border: '5px groove #4D7EA8', borderRadius: '20px', width: '300px', marginTop: isMobile? '5%' : '12%'}}>
                    <h2>Sign Up</h2>
                    <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <label style={{marginBottom: '10px'}} htmlFor="email">Email</label>
                        <input
                            style={{width: '200px'}}
                            onChange={handleEmailChange}
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={inputEmail} // Set the input field value based on the state
                        />
                        <label  style={{marginBottom: '10px', marginTop: '10px'}} htmlFor="password">Password</label>
                        <input
                            style={{width: '200px'}}
                            onChange={handlePasswordChange}
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={inputPassword} // Set the input field value based on the state
                        />
                        <button style={{marginTop: '20px', width: '100px', height: '40px', marginBottom: '20px', backgroundColor: '#4D7EA8', color: 'white', fontWeight: 'bold', borderRadius: '10px'}} onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

                <div style={{border: '5px groove #4D7EA8', borderRadius: '20px', marginTop: '30px', width: '300px'}}>
                    <h2>Login</h2>
                    <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <label style={{marginBottom: '10px'}} htmlFor="login-email">Email</label>
                        <input
                        style={{width: '200px'}}
                            onChange={handleLoginEmailChange}
                            type="email"
                            id="login-email"
                            name="login-email"
                            required
                            value={loginEmail} // Set the input field value based on the login state
                        />
                        <label style={{marginBottom: '10px', marginTop: '10px'}} htmlFor="login-password">Password</label>
                        <input
                        style={{width: '200px'}}
                            onChange={handleLoginPasswordChange}
                            type="password"
                            id="login-password"
                            name="login-password"
                            required
                            value={loginPassword} // Set the input field value based on the login state
                        />
                        <button style={{marginTop: '20px', width: '100px', height: '40px', marginBottom: '20px', backgroundColor: '#4D7EA8', color: 'white', fontWeight: 'bold', borderRadius: '10px'}} onClick={handleLoginSubmit}>Submit</button>
                    </form>
                </div>
            </div>}
            {successMessage && <Menu />}
        </div>
    );
}
