import LandingPage from '../LandingPage';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyC8RTDZjAH5hbMEmt4QIccmQ48inJz2VLs",
    authDomain: "symptomsense-118cf.firebaseapp.com",
    projectId: "symptomsense-118cf",
    storageBucket: "symptomsense-118cf.appspot.com",
    messagingSenderId: "405052185406",
    appId: "1:405052185406:web:13afeaa1803fdade36ea6f",
    measurementId: "G-J5J3EH00NE",
    databaseURL: "https://symptomsense-118cf-default-rtdb.firebaseio.com/"
  };

  
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // const database = getDatabase(app);


  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
