import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearchIC from './Components/FindDoctorSearch/FindDoctorSearch';
import DoctorCardIC from './Components/DoctorCard/DoctorCard';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_up/Sign_up';
import Notification from './Components/Notification/Notification';
import ProfileForm from './Components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
          <Navbar/>
         <InstantConsultation/>
          <Routes>
            <Route path='/' element={<Landing_Page/>}></Route>
            <Route path="/login" element={<Login />}/>
             <Route path="/signup" element={<Sign_Up />}/>
             <Route path="/instant-consultation" element={<InstantConsultation />} />
             <Route path='/notification' element={<Notification/>}></Route>
            <Route path='/profile-card' element={<ProfileForm/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
